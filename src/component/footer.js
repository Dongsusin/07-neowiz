import footerIconYoutube from "../image/footer-icon-youtube.png";
import footerIconInsta from "../image/footer-icon-insta.png";
import footerIconTictok from "../image/footer-icon-tictok.png";
import footerIconTwitter from "../image/footer-icon-tiwter.png";

export const Footer = () => {
  return (
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
              <img src={footerIconYoutube} alt="" />
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
  );
};
