import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo1 from '../logo1.jpg';

const Header = () => {
  const[btnName, setBtnName] = useState('Signin/Signup');

  const btnHandler = (e) => {
    e.preventDefault();
    (btnName== 'Signin/Signup') ? setBtnName('Logout') : setBtnName('Signin/Signup');
  }

  return (
    <>
    <div className="header">
      <div className="logo">
        <img
          src={logo1}
          // src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>Home 🏡</Link></li>
          <li><Link to= '/aboutus' style={{textDecoration: 'none', color: 'inherit'}}>About Us 🌍 </Link></li>
          <li><Link to= '/contactus' style={{textDecoration: 'none', color: 'inherit'}} >Contact Us 📞</Link></li>
          <li><Link to= '/cart' style={{textDecoration: 'none', color: 'inherit'}} >Cart 🛒</Link></li>
          <li><Link className='signin-signup' style={{textDecoration: "none", color: 'inherit'}} onClick={btnHandler}>{btnName} 📴</Link></li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default Header;
