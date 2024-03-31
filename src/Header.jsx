import {Link} from 'react-router-dom';
import PAGES from './pages';
function Header() {
    return (
      <ul className='header' style={{direction: 'flex'}}>
        {
            PAGES.map((page, index) => {
                return (<li key={page.path}>
                    <Link to={page.path}><span>{index+1}</span>-<span>{page.name}</span></Link>
                </li>)
            })
        }
      </ul>
    )
}

export default Header;