import React, { Component } from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

class Header extends Component {
 render(){
   return ( 
    <header className="hdr__nav-bar">
      <Logo />
      <nav className="nav-bar">
        <Nav />
      </nav>
    </header>
   );
 }
}

export default Header;
