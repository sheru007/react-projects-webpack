import React, {useState, useRef, createRef} from 'react'

function getNotes(){
  const arr = localStorage.getItem('notes')
  return arr ? JSON.parse(arr) : [];
}

function NotesDragAndDrop() {
  const [text, setText] =  useState('')
  const [notes, setNotes] = useState(getNotes())
  const divRef = useRef()
  const notesRef = useRef([])
  const handleAddNotes = () => {
    if(!text) return;
    if(notes.map(n => n.text).includes(text)) return;

    const parent = divRef.current.getBoundingClientRect();

    const current = {
      text,
      id: `${text.trim()}#${notes.length}`,
      top: parent.top + Math.floor(Math.random()*200),
      left: parent.left + Math.floor(Math.random()*200),
    }
    
    const newArr = [...notes, current]
    localStorage.setItem('notes', JSON.stringify(newArr))
    setNotes(newArr)
  }

  const handleDeleteNotes = () => {
    localStorage.clear()
    setNotes([])
  }

  const handleDragStart = (e, note) => {
   const {id} = note;
   const currNoteRef = notesRef.current[id].current;
   const cnrp = currNoteRef.getBoundingClientRect()
    console.log({top: cnrp.top, left: cnrp.left})
   const offsetX = e.clientX - cnrp.left;
   const offsetY = e.clientY - cnrp.top;

   const startPos = note;

   const handleMouseMove = (event) => {
      const newX = event.clientX - offsetX;
      const newY = event.clientY - offsetY;

      currNoteRef.style.left = `${newX}px`
      currNoteRef.style.top = `${newY}px`
   }

   const handleMouseUP = (ev) => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUP)

    const finalRef = currNoteRef.getBoundingClientRect();
    const newPos = {top: finalRef.top, left: finalRef.left};

    if(checkOverlap(id)) {  // check for overlap
      currNoteRef.style.left = `${startPos.left}px`
      currNoteRef.style.top = `${startPos.top}px`
    } else {
      // update new posiiton
      updateNewPosition(id, newPos)
    }
   }

   document.addEventListener('mousemove', handleMouseMove)
   document.addEventListener('mouseup', handleMouseUP)

  }
  function checkOverLapping(ele1, ele2) {
    const overlap = !(ele1.top > ele2.bottom || ele1.right < ele2.left || ele1.bottom < ele2.top || ele1.left > ele2.right)
    return overlap;
}

  function checkOverlap(id) {
    const currNoteRef = notesRef.current[id].current;
    const cnrp = currNoteRef.getBoundingClientRect()

    return notes.some((note) => {
      if(note.id === id) return false;
      const otherRef = notesRef.current[note.id].current;
      const otherRefPos = otherRef.getBoundingClientRect()

      return checkOverLapping(cnrp, otherRefPos)
    })
  }
  function updateNewPosition(id, pos){
    const newArr = notes.map(n => {
      if(n.id == id){
        n.top = pos.top;
        n.left = pos.left
      }
      return n;
    })
    localStorage.setItem('notes', JSON.stringify(newArr))
    setNotes(newArr)
  }

  return (
    <div >
      {/* add notes */}
      <div style={{display: 'flex', justifyContent:'center', padding: '10px'}}>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
          <button style={{marginLeft: '20px'}} onClick={handleAddNotes}>Add Notes</button>
          <button style={{marginLeft: '20px'}} onClick={handleDeleteNotes}>delete notes</button>
      </div>

      {/* show notes */}
      <div ref={divRef}
       style={{border: '1px solid'}}
      >
      {
        notes.map((n) => {
          return (<div 
                    key={n.id}
                    ref={notesRef.current[n.id] ? notesRef.current[n.id] : (notesRef.current[n.id] = createRef())} 
                    onMouseDown={(e) => handleDragStart(e, n)}
                    style={{width: '200px', position: 'absolute', top: `${n.top}px`, left: `${n.left}px`, backgroundColor: 'lightyellow', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '5px', margin: '10px', cursor: 'move', userSelect: 'none'}}
                  >
                  <div style={{marginRight: '10px'}}>&#9755;</div>
                  <div>{n.text}</div>
          </div>)
        })
      }
      </div>
    </div>
  )
}

export default NotesDragAndDrop