import React,{ useState, useEffect}from 'react'

function ShowJobs() {
  const [ids, setIds] = useState([])
  const [list, setList] = useState([])

  function makeApi(id) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
  }

  function getNextData(data = []){
    const allApi = data.map(id => makeApi(id))
    const allData = Promise.all(allApi)
      allData.then(allData => {
        console.log({allData})
        setList([...list,...allData])
      })
  }

  const handleClickMore = () => {
    getNextData(ids.slice(list.length, list.length+5))
  }
  const handleCardClick = (url) => {
    window.open(url, '_blank')
  }

  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/jobstories.json').then(res => res.json())
    .then(data => {
      console.log({data})
      setIds(data)
      getNextData(data.slice(0,5))

    }).catch(error => {
      console.log({error})
    })
    

    return () => {

    }
  }, [])
  return (
    <div className='main'>
      <div className='list-container'>
          {
            list.map(job => {
              const {id, title, url, by} = job;
              return (<div onClick={() => handleCardClick(url)} className='job-card' key={id}>
                <p>ID: <span>{id}</span></p>
                <h4>{title}</h4>
                <p>Posted By: <span>{by}</span></p>
              </div>)
            })
          }
      </div>
      {
          (list.length < ids.length) && (<button className='load-btn' onClick={handleClickMore}>load more</button>)
      }
    </div>
  )
}

export default ShowJobs