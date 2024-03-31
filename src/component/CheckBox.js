import React, { useState } from 'react'

const TASK = [
    {
        id: 1,
        text: 'task 1',
        completed: true
    },
    {
        id: 2,
        text: 'task 2',
        completed: true
    },
    {
        id: 3,
        text: 'task 3',
        completed: true
    },
    {
        id: 4,
        text: 'task 4',
        completed: false
    },

]

function CheckBox() {
    const [tasks, setTasks] = useState(TASK)
    const [allDone, setAllDone] = useState(false)

    const handleCheck = (id) => {
        if(id === -1) {
            setAllDone(!allDone)
            setTasks(tasks.map(t => {
                t.completed = !allDone
                return t;
            }))
        } else {
            let checkedCount = 0;
            let newArr = tasks.map(t => {
                if(t.id == id) {
                    t.completed = !t.completed
                }
                if(t.completed) checkedCount++;
                return t;
            })

            if(checkedCount == tasks.length){
                setAllDone(true)
            } else {
                setAllDone(false)
            }
            setTasks(newArr)
        }
    }

  return (
    <div>
        <div>
            <input type='checkbox' checked={allDone} onChange={(e) => handleCheck(-1)} />
            All Done
        </div>
        <div style={{marginLeft: '20px'}}>
        {
            tasks.map(task => {
                return (<div key={task.id}>
                    <input 
                        type='checkbox' 
                        checked={task.completed}
                        onChange={(e) => handleCheck(task.id)}
                    />
                    {task.text}
                </div>)
            })
        }
        </div>
    </div>
  )
}

export default CheckBox