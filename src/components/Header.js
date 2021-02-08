import React from 'react';
import fcb_logo from '../static/img/fcb_logo.png';
import HeaderDropDown from './HeaderDropDown/HeaderDropDown';
const Header = () => {
    return (
        <div className="header">
            <div className="main">
                <img src={fcb_logo} alt=""/>
                <span>FC Barcelona</span>
            </div>
            <div>test</div>
            <div>
                <span>
                    Squad
                </span>
                <HeaderDropDown type={0}/>
            </div>
            
            <div>
                <span>
                Matches
                </span>
                <HeaderDropDown type={1}/>
            </div>
            <div>
                <span>
                Transfers
                </span>
                <HeaderDropDown type={2}/>
            </div>
            <div>
                <span>
                News
                </span>
                <HeaderDropDown type={3}/>
            </div>
            
        </div>
    )
}

export default Header;