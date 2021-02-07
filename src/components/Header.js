import React from 'react';
import fcb_logo from '../static/img/fcb_logo.png';
const Header = () => {
    return (
        <div className="header">
            <button className="main">
                <img src={fcb_logo} alt=""/>
                <span>FC Barcelona</span>
            </button>
            <div>test</div>
            <button>
                Squad
            </button>
            <button>
                Matches
            </button>
            <button>
                Transfers
            </button>
            <button>
                News
            </button>
            
        </div>
    )
}

export default Header;