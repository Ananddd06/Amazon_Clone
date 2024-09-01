import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import {auth} from './Firebase';


function Header() {
  const[{user , basket}, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to = '/'>
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className='header_searchicon'/>
      </div>

      <div className='header_nav'> 
      <Link to = '/SignIn' className='header_link'>
        <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'} </span>
        </div>
        </Link>

        <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
        </div>
      < div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
        </div>

      <Link to='/checkout'>
      <div className='header_cartbasket'>
            <ShoppingCartIcon/>
            <span className="header_cartbasketCount">{basket?.length}</span>
        </div>
      </Link>
      </div> 



      </div>
  )
}

export default Header