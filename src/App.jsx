import {useState} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Profile from './Profile';
import About from './About';
import Home from './Home';
import Testing from './Testing';
import Counter from './Counter';
import StepBar from './component/StepBar';
const TOTAL_STEP = 4;

function App() {
  // console.log(process.env.REACT_APP_API_KEY)
  // console.log(process.env.REACT_APP_AUTH_KEY)

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
  return (
    <div>
        <h1>Welcome to react sk</h1>
        <BrowserRouter>
        <Header />
        <div className='container'>
        <Routes>
            <Route path='/' element={<Counter />} />
            <Route path='/testing' element={<Testing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
        </div>
        </BrowserRouter>
        <StepBar totalSteps={TOTAL_STEP} currentStep={currentStep} />
        <button onClick={handlePrevious} disabled={currentStep == 0}>previous</button>
        <button onClick={handleNext} disabled={currentStep == TOTAL_STEP}>next</button>
    </div>
  )
}

export default App