import "./App.css";
import $ from "jquery";
import logo from "./image/header-logo.png";
import mainVisual1 from "./image/main-visual1.png";
import mainVisual2 from "./image/main-visual2.png";
import mainVisual3 from "./image/main-visual3.png";
import mainVisualMobile1 from "./image/main-visual-mobile1.png";
import mainVisualMobile2 from "./image/main-visual-mobile2.png";
import mainVisualMobile3 from "./image/main-visual-mobile3.png";
import mainNews1 from "./image/main-news1.png";
import mainNews2 from "./image/main-news2.png";
import mainNews3 from "./image/main-news3.png";
import mainGame1 from "./image/main-game1.jpg";
import mainGame2 from "./image/main-game2.png";
import mainGame3 from "./image/main-game3.png";
import mainGame4 from "./image/main-game4.png";
import mainCareer from "./image/main-career.png";
import footerIconYoutube from "./image/footer-icon-youtube.png";
import footerIconInsta from "./image/footer-icon-insta.png";
import footerIconTictok from "./image/footer-icon-tictok.png";
import footerIconTwitter from "./image/footer-icon-tiwter.png";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    //서브헤더
    $(function () {
      let depth1 = $(".mainmenu .mainmenu_list > li ");
      let header = $("header");

      depth1
        .mouseenter(function () {
          header.stop().animate({ height: "500px" });
        })
        .mouseleave(function () {
          header.stop().animate({ height: "93px" });
        });
    });
    //visaul
    var slideIndex = 0;
    showSlides();
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 8000);
    }
    //games roller
    let roller = document.querySelector(".rolling-list");
    roller.id = "roller1";
    let clone = roller.cloneNode(true);
    clone.id = "roller2";
    document.querySelector(".wrap").appendChild(clone);
    document.querySelector("#roller1").style.left = "0px";
    document.querySelector("#roller2").style.left =
      document.querySelector(".rolling-list ul").offsetWidth + "px";
    roller.classList.add("original");
    clone.classList.add("clone");
  }, []);
  return (
    <div>
      <header>
        <div className="innerHeader">
          <nav className="mainmenu">
            <ul className="mainmenu_list">
              <li>
                <a href="/02-neowiz/neowiz.html">
                  <span>
                    <img alt="" className="logo" src={logo} />
                  </span>
                </a>
              </li>
              <li>
                <a href="https://www.neowiz.com/aboutus">
                  <span>네오위즈</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="https://www.neowiz.com/aboutus">회사소개</a>
                  </li>
                  <li>
                    <a href="https://www.neowiz.com/aboutus#company-history">
                      연혁
                    </a>
                  </li>
                  <li>
                    <a href="https://www.neowiz.com/inquiry?inquiryType=hr">
                      문의하기
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.neowiz.com/game">
                  <span>게임</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="https://www.neowiz.com/game">전체</a>
                  </li>
                  <li>
                    <a href="https://www.neowiz.com/game?platform=pc">PC</a>
                  </li>
                  <li>
                    <a href="https://www.neowiz.com/game?platform=mobile">
                      모바일
                    </a>
                  </li>
                  <li>
                    <a href="https://www.neowiz.com/game?platform=console">
                      콘솔
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.neowiz.com/media">
                  <span>홍보</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="https://www.neowiz.com/media">보도자료</a>
                  </li>
                  <li>
                    <a href="https://www.neowiz.com/media/story">
                      네오위즈 스토리
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.neowiz.com/investor/governance/shareholders">
                  <span>투자정보</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="https://www.neowiz.com/investor/governance/shareholders">
                      기업지배구조
                    </a>
                  </li>
                  <li>
                    <a href="https://www.neowiz.com/investor/disclosure/information">
                      공시정보
                    </a>
                  </li>
                  <li>
                    <a href="https://www.neowiz.com/investor/stock">주가정보</a>
                  </li>
                  <li>
                    <a href="https://www.neowiz.com/investor/financial">
                      재무정보
                    </a>
                  </li>
                  <li>
                    <a href="https://www.neowiz.com/investor/ir-library/earnings">
                      IR자료
                    </a>
                  </li>
                  <li>
                    <a href="https://www.neowiz.com/investor/announcement">
                      공고
                    </a>
                  </li>
                  <li>
                    <a href="https://www.neowiz.com/investor/sustainable">
                      지속가능경영
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.neowiz.com/career">
                  <span>인재영입</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="https://www.neowiz.com/career">지원안내</a>
                  </li>
                  <li>
                    <a href="https://www.neowiz.com/career/browse-job">
                      진행 중인 공고
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="language">
              <a className="current" href="">
                KR
              </a>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section id="visual">
          <span className="slideshow-container">
            <div className="Slidesbackground">
              <div className="mySlides fade">
                <a href="https://www.liesofp.com/ko-kr">
                  <img className="slideshow-image pc" src={mainVisual1} />
                  <img
                    className="slideshow-image mobile"
                    src={mainVisualMobile1}
                  />
                </a>
              </div>
              <div className="mySlides fade">
                <a href="https://www.browndust2.com/ko-kr/">
                  <img className="slideshow-image pc" src={mainVisual2} />
                  <img
                    className="slideshow-image mobile"
                    src={mainVisualMobile2}
                  />
                </a>
              </div>
              <div className="mySlides fade">
                <a href="https://play.google.com/store/apps/details?id=com.hidea.cat&pli=1">
                  <img className="slideshow-image pc" src={mainVisual3} />
                  <img
                    className="slideshow-image mobile"
                    src={mainVisualMobile3}
                  />
                </a>
              </div>
            </div>
          </span>
        </section>
        <section id="news">
          <div className="container">
            <p className="title">NEWS</p>
            <div className="content">
              <a href="https://www.neowiz.com/media/press-release-detail/3272">
                <div
                  className="item-first"
                  style={{
                    backgroundImage: `url(${mainNews1})`,
                  }}
                >
                  <div className="sub-content">
                    <div className="desc">
                      네오위즈 ‘디제이맥스 리스펙트 V’, 일본 팝업 스토어 성료…
                      이용자 1천여 명 방문
                    </div>
                    <div className="date">2025.3.26</div>
                  </div>
                </div>
              </a>
              <a href="https://www.neowiz.com/media/press-release-detail/3273">
                <div
                  className="item"
                  style={{
                    backgroundImage: `url(${mainNews2})`,
                  }}
                >
                  <div className="sub-content">
                    <div className="desc">
                      네오위즈 ‘오 마이 앤’, 신규 콘텐츠 ‘릴라의 그림책’
                      업데이트
                    </div>
                    <div className="date">2025.3.25</div>
                  </div>
                </div>
              </a>
              <a href="https://www.neowiz.com/media/press-release-detail/3274">
                <div
                  className="item"
                  style={{
                    backgroundImage: `url(${mainNews3})`,
                  }}
                >
                  <div className="sub-content">
                    <div className="desc">
                      네오위즈, ‘P의 거짓 오케스트라 콘서트’ 성료
                    </div>
                    <div className="date">2025.3.24</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section id="games">
          <div className="container">
            <div className="title">
              <p>GAMES</p>
            </div>
            <div className="wrap">
              <div className="rolling-list">
                <ul>
                  <li>
                    <a href="https://www.liesofp.com/ko-kr">
                      <div className="image-wrap">
                        <img alt="" src={mainGame1} />
                        <h2>P의 거짓</h2>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.browndust2.com/ko-kr/">
                      <div className="image-wrap">
                        <img alt="" src={mainGame2} />
                        <h2>브라운더스트2</h2>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://play.google.com/store/apps/details?id=com.hidea.cat">
                      <div className="image-wrap">
                        <img alt="" src={mainGame3} />
                        <h2>고양이와 스프</h2>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://store.steampowered.com/agecheck/app/960170/">
                      <div className="image-wrap">
                        <img alt="" src={mainGame4} />
                        <h2>디제이맥스 리스펙트V</h2>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="swiper">
              <a href="https://www.neowiz.com/game">Learn More</a>
            </div>
          </div>
        </section>
        <section id="careers">
          <div className="container">
            <h1 className="title">CAREERS</h1>
            <div className="content">
              <div className="visual">
                <img alt="" src={mainCareer} />
                <div className="desc">
                  <div className="invitation">
                    <h3>새로운 도전을 위한 문이 열렸습니다.</h3>
                    <p>
                      지금 우리와 함께 새로운 게임의 세계를 만들어나갈 준비가
                      되셨나요?
                    </p>
                  </div>
                  <div className="button">
                    <a href="https://www.neowiz.com/career/browse-job">
                      <button className="white">Positions 38</button>
                    </a>
                    <a href="https://www.neowiz.com/career">
                      <button className="black">Explore Careers</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="container">
            <div className="left">
              <p className="detail-01">CONTACT US</p>
              <p className="detail-02">우리가 찾는 것은 훌륭한 게임입니다.</p>
              <p className="detail-03">
                게임 관련 위한 모든 제휴 제안과 문의 환영합니다.
              </p>
              <a href="https://www.neowiz.com/inquiry?inquiryType=hr">
                <p className="detail-04">Get Connect</p>
              </a>
            </div>
            <div className="right" />
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="left">
            <div className="content-01">
              <a href="https://www.neowiz.com/policy/personal">
                <p className="text-01">개인정보처리방침</p>
              </a>
              <a href="https://www.neowiz.com/inquiry?inquiryType=hr">
                <p className="text-02">문의하기</p>
              </a>
            </div>
            <div className="content-02">
              <p className="text-03">
                사업자등록번호 120-87-14245통신판매업 신고번호 제
                2010-경기성남-0562호
              </p>
              <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208714245">
                <p className="text-04">사업자정보확인</p>
              </a>
            </div>
            <div className="content-03">
              <p>© NEOWIZ All rights reserved.</p>
            </div>
          </div>
          <div className="right">
            <div className="content-04">
              <a href="https://www.youtube.com/channel/UCPxSQrpLyon5LA_19oYmaDQ">
                <img src={footerIconYoutube} />
              </a>
              <a href="https://www.instagram.com/neowiz_official/">
                <img alt="" src={footerIconInsta} />
              </a>
              <a href="https://x.com/NEOWIZofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <img alt="" src={footerIconTictok} />
              </a>
              <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F6889107%2Fadmin%2Fdashboard%2F">
                <img alt="" src={footerIconTwitter} />
              </a>
            </div>
            <div className="content-05">
              <span>Family Site</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
