import React from "react";
import "./singlePost.css";
import { Link } from "react-router-dom";

export default function SinglePost() {
    return (
        <div className="single__post">
            <div className="img">
                <img src="https://source.unsplash.com/800x580/?bikini" alt="" />
            </div>
            <h3 className="title">블로그 제목입니다.</h3>
            <div className="info">
                <span class="author">
                    <Link href="/">조운섭</Link>
                </span>
                <span class="date">2022-04-28</span>
                <span class="modify">
                    <Link href="/">수정</Link>
                </span>
                <span class="delete">
                    <Link href="/">삭제</Link>
                </span>
            </div>
            <div className="desc">
                <p>
                    이마트24는 다음달 1일부터 7일까지 바류 아이스크림 40여종을 개당 300원~400원꼴로 구매할 수 있는 할인
                    이벤트를 진행한다. 행사기간 동안 이마트24에서 결합할인(2개 1200원 / 3개 1800원 / 4개 2400원) 또는
                    2+1으로 판매하는 아이스크림(바류)을 1만2000원 이상 구매하면 반값에 재공하는 할인 이벤트다. 다만
                    할인은 제휴카드(우리/삼성/현대)로 결제해야 한다. 동일하게 2+1으로 판매 중인 메로나, 수박바, 누가바,
                    돼지바 등은 15개(교차 증정)를 제휴카드로 결제 시 6000원으로 개당 400원 꼴로 구매할 수 있다.
                    이마트24는 향후 고객들이 아이스크림을 구매할 때 이마트24를 떠올리게 하겠다는 각인 마케팅 일환으로
                    인기 바류 아이스크림을 300월~400원꼴로 구매할 수 있는 파격적인 이벤트를 기획했다. 여름철 대표 상품
                    중 하나인 파우치음료 전상품 할인 혜택도 제공한다. 이마트24는 올해 여름을 맞아 아웃도어 브랜드
                    코오롱스포츠와 협업한 0kcal 에이드 3종과 YG엔터테인먼트 그룹 트레저(TREASURE)멤버들의 사진이 담긴
                    커피 2종을 선보이는 등 50여종의 파우치 음료를 운영한다. 이마트24는 5월 한 달간, 모든 파우치음료를
                    BC페이북으로 결제 시 600원 할인 혜택을 제공한다. 1일, 1인, 600원 할인 한정이다. 700원에 판매 중인
                    아임이 트레저 커피, 복숭아에이드 등을 100원(컵얼음 제외)에 구매할 수 있는 기회다. 출처 :
                    이코노믹리뷰(http://www.econovill.com)
                </p>
                <p>
                    금, 토, 일을 겨냥한 주말 할인 이벤트도 진행된다. 5월 한 달간 이마트24에서 팔도비빔면, 진비빔면,
                    진짜쫄면, 비빔밀면, 평양물냉면, 함흥비빔냉면 등 여름철 인기 있는 봉지면 6종을 번들로 구매하면서
                    제휴카드(삼성/하나)로 결제 시 반값 할인 혜택을 제공한다. 이밖에도 이마트24는 기온이 높아지고 외부
                    활동이 늘어날 것으로 예상되는 5월을 맞아 하절기 고객들이 즐겨 찾는 음료, 유제품, 아이스크림
                    행사상품을 전월 대비 30%~70% 늘렸다. 이처럼 이마트24가 5월을 맞아 대대적인 할인 이벤트를 진행하는
                    것은 5월이 하절기로 전환되는 길목으로 시원한 상품을 찾는 고객이 급격하게 증가하기 때문이다. 실제
                    코로나19 이전인 2019년 5월 아이스크림, 음료수, 파우치음료 등 쿨상품의 매출은 전월 대비 30%나
                    증가했다. 이는 1년 동안 전월 대비 증가율로는 가장 높은 수치다. 이마트24 관계자는 “오르는 기온과
                    물가를 모두 잡기 위해 시원하게 즐기는 상품의 할인 혜택을 강화했다”며 “외부 활동이 늘어나고 덩달아
                    편의점에서 아이스크림, 음료수, 유제품 등을 구매하는 고객이 증가할 것으로 예상됨에 따라 앞으로도 고객
                    만족감을 높일 수 있는 이벤트를 지속해 나갈 계획이다”고 말했다. 출처 :
                    이코노믹리뷰(http://www.econovill.com)
                </p>
            </div>
        </div>
    );
}
