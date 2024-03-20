import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Profile from './Profile';
import About from './About';
import Home from './Home';
import Testing from './Testing';
import Counter from './Counter';

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
            <Route path='/' element={<Counter />} />
            <Route path='/testing' element={<Testing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default App