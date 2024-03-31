import React, {useState, useEffect, useRef} from 'react'
import customUseEffect from '../hooks/custom-use-effects'

function GreenBoard() {
    const [clicked, setClicked] = useState([])
    const id = useRef(null)
    const handleClick = (i) => {
        setClicked([...clicked, i])
    }

    customUseEffect(() => {
        console.log(">> use Effect : ", clicked)
        if(clicked.length == 8) {
            clicked.length = clicked.length-1;
            setClicked([...clicked])
            id.current = setInterval(() => {
                clicked.length = clicked.length-1;
                setClicked([...clicked])
                if(clicked.length == 0) {
                    clearInterval(id.current)
                }
            }, 3000)

        }

        return () => {
            clearInterval(id.current)
        }
    }, [clicked])

    return (
        
        <div className='green-board-container'>
            {
                [...Array(9)].map((_, i) => {
                    // console.log({i})
                    return (<div 
                        className={`box ${i === 4 ? "hide" : ""} ${clicked.includes(i) ? "green" : ""}`} 
                        key={i}
                        onClick={() => handleClick(i)}
                    >
                    </div>)
                })
            }
        </div>
    )
}

export default GreenBoard