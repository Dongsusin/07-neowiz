import mainGame1 from "../image/main-game1.jpg";
import mainGame2 from "../image/main-game2.png";
import mainGame3 from "../image/main-game3.png";
import mainGame4 from "../image/main-game4.png";

export const Games = () => {
  return (
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
  );
};
