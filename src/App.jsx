import {HashRouter, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import PAGES from './pages';


function App() {
  // console.log(process.env.REACT_APP_API_KEY)
  // console.log(process.env.REACT_APP_AUTH_KEY)
  return (
    <div>
        <HashRouter>
        <div className='container'>
        <Routes>
            <Route path="/" element={<HomePage />} />
            {
              PAGES.map((page) => {
                return <Route key={page.path} path={page.path} element={<page.component />} />
              })
            }
            <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        </HashRouter>
    </div>
  )
}

export default App


function NotFound() {
  return <h2>routes not matching 404 not found</h2>
}