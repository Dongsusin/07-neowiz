import "./App.css";
import $ from "jquery";
import { useEffect } from "react";
import { Header } from "./component/header";
import { Visual } from "./component/visual";
import { News } from "./component/news";
import { Games } from "./component/games";
import { Carrers } from "./component/carrers";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";

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
      <Header />
      <main>
        <Visual />
        <News />
        <Games />
        <Carrers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
