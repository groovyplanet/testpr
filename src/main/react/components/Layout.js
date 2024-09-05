// src/main/react/components/Layout.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout({ children }) {

    return (
        <div className="container">
            <Header />
            <Sidebar />
            <main className="main-content">
                <div className="content-wrapper">
                    { children }
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
