import {Link} from 'react-router-dom';

function Header() {
    return (
      <ul className='header' style={{direction: 'flex'}}>
          <li>
              <Link to='/'>Home</Link>
          </li>
          <li>
              <Link to='/about'>About</Link>
          </li>
          <li>
              <Link to='/profile'>Profile</Link>
          </li>
          <li>
              <Link to='/testing'>Testing</Link>
          </li>
      </ul>
    )
}

export default Header;