import mainVisual1 from "../image/main-visual1.png";
import mainVisual2 from "../image/main-visual2.png";
import mainVisual3 from "../image/main-visual3.png";
import mainVisualMobile1 from "../image/main-visual-mobile1.png";
import mainVisualMobile2 from "../image/main-visual-mobile2.png";
import mainVisualMobile3 from "../image/main-visual-mobile3.png";

export const Visual = () => {
  return (
    <section id="visual">
      <span className="slideshow-container">
        <div className="Slidesbackground">
          <div className="mySlides fade">
            <a href="https://www.liesofp.com/ko-kr">
              <img className="slideshow-image pc" src={mainVisual1} alt="" />
              <img
                className="slideshow-image mobile"
                src={mainVisualMobile1}
                alt=""
              />
            </a>
          </div>
          <div className="mySlides fade">
            <a href="https://www.browndust2.com/ko-kr/">
              <img className="slideshow-image pc" src={mainVisual2} alt="" />
              <img
                className="slideshow-image mobile"
                src={mainVisualMobile2}
                alt=""
              />
            </a>
          </div>
          <div className="mySlides fade">
            <a href="https://play.google.com/store/apps/details?id=com.hidea.cat&pli=1">
              <img className="slideshow-image pc" src={mainVisual3} alt="" />
              <img
                className="slideshow-image mobile"
                src={mainVisualMobile3}
                alt=""
              />
            </a>
          </div>
        </div>
      </span>
    </section>
  );
};
