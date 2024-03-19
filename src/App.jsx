import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Profile from './Profile';
import About from './About';
import Home from './Home';

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  console.log(process.env.REACT_APP_AUTH_KEY)
  return (
    <div>
        <h1>Welcome to react sk</h1>
        <BrowserRouter>
        <Header />
        <div className='container'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default App