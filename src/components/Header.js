import React from 'react';
import fcb_logo from '../static/img/fcb_logo.png';
import HeaderDropDown from './HeaderDropDown/HeaderDropDown';
import ToggleBtn from './common/ToggleBtn';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <div className="main">
                    <img src={fcb_logo} alt="" />
                    <span>FC BARCELONA</span>
                </div>
            </Link>
            <div className="top-header">
                <div>FOLLOW FC BARCELONA</div>
                <div className="sns-list">
                    <a href="https://www.instagram.com/fcbarcelona/" className="sns-link" target="_blank">
                        <InstagramIcon style={{ fontSize: 40 }} />
                    </a>
                    <a href="https://www.facebook.com/fcbarcelona" className="sns-link" target="_blank">
                        <FacebookIcon style={{ fontSize: 40 }} />
                    </a>
                    <a href="https://twitter.com/fcbarcelona" className="sns-link" target="_blank">
                        <TwitterIcon style={{ fontSize: 40 }} />
                    </a>
                    <a href="https://www.youtube.com/channel/UC14UlmYlSNiQCBe9Eookf_A" className="sns-link" target="_blank">
                        <YouTubeIcon style={{ fontSize: 40 }} />
                    </a>
                </div>
                <div className="darkmode">
                    <span>Home</span>
                    <ToggleBtn />
                    <span>Away</span>
                </div>
            </div>
            <div>
                <Link to="/squadList">
                    <span>
                        SQUAD
                    </span>
                </Link>
                <HeaderDropDown type={0} />
            </div>

            <div>
                <Link to="/match">
                    <span>
                        MATCHES
                    </span>
                </Link>
                <HeaderDropDown type={1} />
            </div>
            <div>
                <Link to="/transfer">
                    <span>
                        TRANSFERS
                    </span>
                </Link>
                <HeaderDropDown type={2} />
            </div>
            <div>
                <Link to="/news">
                    <span>
                        NEWS
                </span>
                </Link>
                <HeaderDropDown type={3} />
            </div>

        </div>
    )
}

export default Header;