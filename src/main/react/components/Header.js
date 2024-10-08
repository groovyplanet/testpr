import React from 'react';

function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <img src="/logo.png" alt="IKEA Logo"/>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li><a href="#">인사관리</a></li>
                        <li><a href="#">영업관리</a></li>
                        <li><a href="#">고객관리</a></li>
                        <li><a href="#">상품관리</a></li>
                    </ul>
                </nav>
                <div className="header-right">
                    <div className="notifications">
                        <i className="bell-icon">🔔</i>
                    </div>
                    <div className="profile">
                        {/*<img src="profile.png" alt="Profile" className="profile-pic"/>*/}
                        <span className="username">홍길동</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
