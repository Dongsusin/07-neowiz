import logo from "../image/header-logo.png";

export const Header = () => {
  return (
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
            <a className="current" href="https://www.neowiz.com/">
              KR
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
