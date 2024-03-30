import React from 'react'

function StepBar({totalSteps = 0, currentStep = 0}) {
    const arr = [...Array(totalSteps)]
  return (
    <div className='step-bar-container'>
        {
            arr.map((item, i) => {

                return (<div style={{backgroundColor: i <= currentStep-1 ? 'red' : 'yellow'}} className='step-circle' key={i}>{i}</div>)
            })
        }
    </div>
  )
}

export default StepBar