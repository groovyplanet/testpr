import React from 'react'; //어느 컴포넌트이든 React임포트가 필요합니다.
import ReactDOM from 'react-dom/client'; //root에 리액트 돔방식으로 렌더링시 필요합니다.
import './Main.css'
import Layout from "./components/Layout"; //css파일 임포트
import {BrowserRouter, useSearchParams} from 'react-router-dom'

function Main() {


    const [searchParams, setSearchParams] = useSearchParams(); // 쿼리 스트링을 searchParams 형태로 가져오고
    const user = searchParams.get('user');
    console.log(user)

    return (
        <Layout>
            <div>
                <h3 className="app">이것이 멀티 페이지 렌더링 방식의 리액트다.</h3>
            </div>

            <h1>환영합니다, ERP 시스템입니다.</h1>
            {/* 페이지별 주요 컨텐츠 */}
            <a href={"/user.do?age=20"}>유저페이지로 이동</a>
        </Layout>

    )
}
//페이지 root가 되는 JS는 root에 삽입되도록 처리
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Main />
    </BrowserRouter>
);
