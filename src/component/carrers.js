import mainCareer from "../image/main-career.png";

export const Carrers = () => {
  return (
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
  );
};
