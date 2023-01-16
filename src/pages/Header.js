import './Header.css'
import {Link} from 'react-router-dom'

function Header(){
return(
    <header>
        <div className="mainHeader">
          <div className='leftNav '>
            <img src="https://www.azirish.org/wp-content/uploads/2016/05/bookgroup2.png" width="65" height="65"></img>
            <span>BiblioSite</span>
          </div>
          <div>
            <ul className='rightNav'>
            <li><Link className="link" to="/">Home</Link></li>
              <li><Link className="link" to="/Login">Login</Link></li>
              <li><Link className="link" to="/Registration">Registration</Link></li>
              <li><Link className="link" to="/ContactUS">ContactUS</Link></li>
              <li><Link className="link" to="/About">About</Link></li>
              <li><Link className="link" to="/Books">Books</Link> </li>
            </ul>
          </div>
        </div>
      </header>
)

}

export default Header;