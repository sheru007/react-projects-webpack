import {Link} from 'react-router-dom';
import PAGES from './pages';
function HomePage() {
    return (
      <div style={{textAlign: 'center'}}>
        <h2>React Machine Coding Project</h2>
        <h4>Click on any project and start using it</h4>
        <ul className='card-container' style={{direction: 'flex'}}>
          {
              PAGES.map((page, index) => {
                  return (<li id="card" key={page.path}>
                      <Link to={page.path}><span>{index+1}</span>-<span>{page.name}</span></Link>
                  </li>)
              })
          }
        </ul>
      </div>
    )
}

export default HomePage;