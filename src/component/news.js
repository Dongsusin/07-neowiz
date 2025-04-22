import mainNews1 from "../image/main-news1.png";
import mainNews2 from "../image/main-news2.png";
import mainNews3 from "../image/main-news3.png";

export const News = () => {
  return (
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
                  네오위즈 ‘오 마이 앤’, 신규 콘텐츠 ‘릴라의 그림책’ 업데이트
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
  );
};
