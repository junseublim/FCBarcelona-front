import React from 'react';
import fcb_logo from '../static/img/fcb_logo.png';
import HeaderDropDown from './HeaderDropDown/HeaderDropDown';
import ToggleBtn from './common/ToggleBtn';
const Header = () => {
    return (
        <div className="header">
            <div className="main">
                <img src={fcb_logo} alt=""/>
                <span>FC BARCELONA</span>
            </div>
            <div className="top-header">
                <div>FOLLOW FC BARCELONA</div>
                <div className="sns-list">
                    <img src={fcb_logo} alt=""/>
                    <img src={fcb_logo} alt=""/>
                    <img src={fcb_logo} alt=""/>
                    <img src={fcb_logo} alt=""/>    
                </div>
                <div className="darkmode">
                    <ToggleBtn/>
                </div>
            </div>
            <div>
                <span>
                    SQUAD
                </span>
                <HeaderDropDown type={0}/>
            </div>
            
            <div>
                <span>
                MATCHES
                </span>
                <HeaderDropDown type={1}/>
            </div>
            <div>
                <span>
                TRANSFERS
                </span>
                <HeaderDropDown type={2}/>
            </div>
            <div>
                <span>
                NEWS
                </span>
                <HeaderDropDown type={3}/>
            </div>
            
        </div>
    )
}

export default Header;