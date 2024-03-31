import React, {useState} from 'react'
const TOTAL_STEP = 4;

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

export default function StepBarApp() {
  const [currentStep, setCurrentStep] = useState(0)
  const handlePrevious = () => {
      if(currentStep > 0) {
        setCurrentStep(curr => curr - 1)
      }
  }

  const handleNext = () => {
    if(currentStep < TOTAL_STEP) {
      setCurrentStep(curr => curr + 1)
    }
  }
  return (<div>
      <StepBar totalSteps={TOTAL_STEP} currentStep={currentStep} />
      <button onClick={handlePrevious} disabled={currentStep == 0}>previous</button>
      <button onClick={handleNext} disabled={currentStep == TOTAL_STEP}>next</button>
  </div>)
}