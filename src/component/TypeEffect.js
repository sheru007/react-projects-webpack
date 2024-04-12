import React, { useEffect, useState, use } from 'react'

async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
const inputs = ['FullStack Developer', 'Frontend Engineer', 'React Native Developer']
function TypeEffect() {
    const [text, setText] = useState('')
    async function start(index) {
        const currentIndex = index % inputs.length
        let input = inputs[currentIndex]
        let arr = input.split("")
        let n = arr.length;
        for(let i=0; i< n; i++){
            setText(prev => prev+arr[i])
            // console.log("before")
            await sleep(100)
            // console.log("after")
            if(i == n-1){
                // setText('')
                backword(currentIndex)
            }
        }
    }

    async function backword(index) {
        const currentIndex = index % inputs.length
        let input = inputs[currentIndex]
        let arr = input.split("")
        let n = arr.length;
        for(let i=n; i >= 0; i--){
            setText(prev => prev.slice(0,i))
            // console.log("before")
            await sleep(100)
            // console.log("after")
            if(i == 0){
                setText('')
                start(currentIndex+1)
            }
        }
    }
    useEffect(() => {
        
        start(0);
    }, [])
  return (
    <div>
        <div>Inputs : {inputs.join(", ")}</div>
    <div style={{color: 'blue'}}>{text}<span style={{width: '5px', height: '5px', border: '1px solid blue'}}></span></div>
    </div>
  )
}

export default TypeEffect