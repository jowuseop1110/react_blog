import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <footer id="footer" class="footer gray">
                <div class="container">
                    <h2 class="ir_so">푸터 바로가기 메뉴</h2>
                    <div class="footer-menu">
                        <div>
                            <h3>레이아웃 영역</h3>
                            <ul>
                                <li>
                                    <Link to="/">레이아웃 유형01</Link>
                                </li>
                                <li>
                                    <Link to="/">레이아웃 유형02</Link>
                                </li>
                                <li>
                                    <Link to="/">레이아웃 유형03</Link>
                                </li>
                                <li>
                                    <Link to="/">레이아웃 유형04</Link>
                                </li>
                                <li>
                                    <Link to="/">레이아웃 유형05</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>메뉴 영역</h3>
                            <ul>
                                <li>
                                    <Link to="/">메뉴 유형01</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>메인 영역</h3>
                            <ul>
                                <li>
                                    <Link to="/">이미지 유형01</Link>
                                </li>
                                <li>
                                    <Link to="/">동영상 유형02</Link>
                                </li>
                                <li>
                                    <Link to="/">슬라이드 유형03</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>게시판 영역</h3>
                            <ul>
                                <li>
                                    <Link to="/">게시판</Link>
                                </li>
                                <li>
                                    <Link to="/">게시판 보기</Link>
                                </li>
                                <li>
                                    <Link to="/">게시판 수정</Link>
                                </li>
                                <li>
                                    <Link to="/">게시판 쓰기</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>게시판 영역</h3>
                            <ul>
                                <li>
                                    <Link to="/">게시판</Link>
                                </li>
                                <li>
                                    <Link to="/">게시판 보기</Link>
                                </li>
                                <li>
                                    <Link to="/">게시판 수정</Link>
                                </li>
                                <li>
                                    <Link to="/">게시판 쓰기</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>사이트</h3>
                            <ul>
                                <li>
                                    <Link to="#">웹표준 사이트</Link>
                                </li>
                                <li>
                                    <Link to="#">반응형 사이트</Link>
                                </li>
                                <li>
                                    <Link to="#">패럴랙스 사이트</Link>
                                </li>
                                <li>
                                    <Link to="#">포트폴리오 사이트</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <address class="footer-rights">&copy; 2022 webstoryboy. All rights reserved.</address>
                </div>
            </footer>
        </div>
    );
}
