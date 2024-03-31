import React, {useEffect, useRef, useState} from 'react'

function MultiSelectInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    setActiveSuggestion(0)
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
    .then((res) => res.json())
    .then((data) => {
      console.log({data})
      setSuggestions(data)
    })
    .catch((err) => {
      console.error(err);
    });
  }, [searchTerm])

  const handleSelectUser = (user = {}) => {
    console.log({user: user.firstName})
    setSelectedUsers([...selectedUsers, user])
    setSelectedUserSet(new Set([...selectedUserSet, user.email]))
    setSearchTerm("")
    setSuggestions([])
    inputRef.current.focus()
  }

  const handlePillClick = (user = {}) => {
    setSelectedUsers(selectedUsers.filter(su => su.id !== user.id))
    const updatedEmails = new Set(selectedUserSet)
    updatedEmails.delete(user.email)
    setSelectedUserSet(updatedEmails)
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Backspace' && e.target.value === "" && selectedUsers.length > 0) {
      handlePillClick(selectedUsers[selectedUsers.length-1])
    } else if(e.key === 'ArrowDown' && suggestions.users.length > 0) {
      e.preventDefault()
      setActiveSuggestion(prev => prev < suggestions.users.length-1 ? prev+1 : prev)

    } else if(e.key === 'ArrowUp' && suggestions.users.length > 0) {
      e.preventDefault()
      setActiveSuggestion(prev => prev > 0 ? prev-1 : prev)
    } else if(e.key == 'Enter' && activeSuggestion >= 0 && activeSuggestion < suggestions.users.length){
      handleSelectUser(suggestions.users[activeSuggestion])
    }
  }

  return (
    <div className='user-search-container'>
      <div className='user-search-input'>
        {/* PILLS */}
        {
          selectedUsers.map(user => {
            return <Pill image={user.image} text={`${user.firstName} ${user.lastName}`} onClick={() => handlePillClick(user)} />
          })
        }
        {/* INPUT FIELD WITH SEARCH SUGGESTION */}
        <div>
          <input 
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search For a User..."
            onKeyDown={handleKeyDown}
          />

          {/* SEARCH SUGGESTION */}
          <ul className='suggestions-list'>
          {
              suggestions?.users?.map((user, index) => {
                return selectedUserSet.has(user.email) ? <></> : (<li className={index === activeSuggestion ? "active" : ""} key={user.email} onClick={() => handleSelectUser(user)}>
                  <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
                  <span>{user.firstName} {user.lastName}</span>
                </li>)
              })
            }
          </ul>
        </div>
        
      </div>
    </div>
  )
}

function Pill({image, text, onClick}) {
  return (
    <span className="user-pill" onClick={onClick}>
      <img src={image} alt={text} />
      <span>{text} &times;</span>
    </span>
  );
};

export default MultiSelectInput

