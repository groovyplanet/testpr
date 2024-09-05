import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container">
            {/* 헤더(Header) */}
            <header className="header">
                <div className="logo">ERP 시스템</div>
                <div className="user-info">
                    <span className="user-name">사용자 이름</span>
                    <div className="notifications">
                        <span className="badge">3</span>
                        <i className="icon-bell"></i> {/* 알림 아이콘 (예: FontAwesome 사용) */}
                    </div>
                </div>
            </header>

            {/* 사이드바(Sidebar) */}
            <aside className="sidebar">
                <nav className="nav-menu">
                    <a href="/dashboard" className="nav-link">대시보드</a>
                    <a href="/products" className="nav-link">제품 관리</a>
                    <a href="/orders" className="nav-link">주문 관리</a>
                    <a href="/customers" className="nav-link">고객 관리</a>
                    <a href="/reports" className="nav-link">보고서</a>
                </nav>
            </aside>

            {/* 메인 컨텐츠(Main Content) */}
            <main className="main-content">
                <div className="content-wrapper">
                    <h1>환영합니다, ERP 시스템입니다.</h1>
                    {/* 이곳에 각 페이지의 주요 컨텐츠를 넣습니다 */}
                </div>
            </main>

            {/* 푸터(Footer) */}
            <footer className="footer">
                <p>&copy; 2024 ERP 시스템. 모든 권리 보유.</p>
            </footer>
        </div>
    );
}

export default App;
