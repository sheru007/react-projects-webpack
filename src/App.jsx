import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import PAGES from './pages';


function App() {
  // console.log(process.env.REACT_APP_API_KEY)
  // console.log(process.env.REACT_APP_AUTH_KEY)
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>React machine coding projects</h1>
        <BrowserRouter>
        <Header />
        <br />
        <hr />
        <br />
        <div className='container'>
        <Routes>
            <Route path="/" element={<MainPage />} />
            {
              PAGES.map((page) => {
                return <Route key={page.path} path={page.path} element={<page.component />} />
              })
            }
            <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default App


function NotFound() {
  return <h2>routes not matching 404 not found</h2>
}
function MainPage() {
  return <h2>Click on About Buttons to show the projects</h2>
}