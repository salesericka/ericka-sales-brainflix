import React from 'react';
import Logo from '../Logo/Logo';
import profilePhoto from '../../assets/images/mohan-muruge.jpg';
// import Button from '../Button/Button';
import UserPhoto from '../UserPhoto/UserPhoto';
import uploadIcon from '../../assets/icons/svg/Icon-upload.svg';
import './Header.scss';

function Header (props) {
  console.log(props)
  return( 
    <header className="hdr__nav-bar">
      <Logo />
      <nav className="nav-bar">
        <form className="nav-bar__form">
          <input type="search" className="nav-bar__search-box" name="search" placeholder="Search">
          </input>
          <div className="nav-bar__box">
            <div className="nav-bar__box-btn">
              {/* <Button 
              button='Upload'
              img={uploadIcon}/> */}
              <button className="btn" onClick={props.clickHandler}>
                <img src={uploadIcon} className="btn__img" alt=""/>
                  Upload
              </button>
            </div>
            <UserPhoto src={profilePhoto}/>
          </div>
        </form>
      </nav>
    </header>
  );
}

export default Header;
