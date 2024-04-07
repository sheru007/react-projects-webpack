import React, {useEffect, useState} from 'react'

function checkOverLapping(ele1, ele2) {
    const overlap = !(ele1.top > ele2.bottom || ele1.right < ele2.left || ele1.bottom < ele2.top || ele1.left > ele2.right)
    return overlap;
}

function getRamdomColor(){
    const str = '0123456789ABCDEF';
    let color = '#'
    for(let i=0; i< 6; i++){
        color += str[Math.floor(Math.random()*16)]
    }
    return color;
}

function DetectOverlapCircle() {
    const [elementsCordinate, setElementsCordinates] = useState([])

    useEffect(() => {
        window.addEventListener('click', draw);

        return () => {
            window.removeEventListener('click', draw);
        }
    }, [])

    function draw(e){
        const {clientX, clientY} = e;
        const current = {
            top: clientY - 50,
            left: clientX - 50,
            right: clientX + 50,
            bottom: clientY + 50,
            background: 'red'
        }

        setElementsCordinates(prev => {
            for(let i=0; i< prev.length; i++) {
                if(checkOverLapping(current, prev[i])) {
                    current.background = getRamdomColor()
                    break;
                }
            }
            
            return [...prev, current]
        })
    }
  return (
    <div>
        <h2>Click on anywhere on the screen and see magic</h2>
        {
            elementsCordinate.map(c => {
                return <Circle {...c} key={c.top + c.left + c.background} />
            })
        }
    </div>
  )
}
function Circle({top, left, background}){

    return <div style={{
        position: 'absolute',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        opacity: '0.5',
        top,
        left,
        backgroundColor: background
    }}>

    </div>
}
export default DetectOverlapCircle