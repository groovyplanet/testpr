import React from "react";
import ReactDOM from 'react-dom/client';

function profile() {

    return (
        <div>
            <h3>프로필 페이지(테스트) 입니다</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <profile />
);