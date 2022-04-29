import React from "react";
import "./mypage.css";
import { Link } from "react-router-dom";

export default function Mypage() {
    return (
        <>
            {" "}
            <section className="blog__login">
                <div className="member__form">
                    <h3>회원 정보</h3>
                    <div className="join-intro">
                        <div className="face">
                            <img
                                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt="기본이미지"
                            />
                        </div>
                        <div className="intro">자기소개해주세요!</div>
                    </div>
                    <div className="join-info">
                        <ul>
                            <li>
                                <strong>이메일</strong>
                                <span>dnstjq6305@naver.com</span>
                            </li>
                            <li>
                                <strong>닉네임</strong>
                                <span>캠핑모임</span>
                            </li>
                            <li>
                                <strong>이름</strong>
                                <span>조운섭</span>
                            </li>
                            <li>
                                <strong>생일</strong>
                                <span>1991-11-10</span>
                            </li>
                            <li>
                                <strong>번호</strong>
                                <span>010-2406-8904</span>
                            </li>
                            <li>
                                <strong>성별</strong>
                                <span></span>
                            </li>
                            <li>
                                <strong>사이트</strong>
                                <span></span>
                            </li>
                        </ul>
                    </div>

                    <div className="join-btn">
                        <Link to="/">수정하기</Link>
                        <Link to="/">탈퇴하기</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
