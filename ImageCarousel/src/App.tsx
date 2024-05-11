import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const imgContainer = document.getElementById("imgContainer");
    const leftBtn = document.getElementById("left");
    const rightBtn = document.getElementById("right");

    // we are selectingh all elements
    const imgs = document.querySelectorAll("#imgContainer img");
    console.log("imgs ", imgs);

    let slide = 0;

    let interval = setInterval(run, 2000);

    function run() {
      slide++;
      changeImage();
    }

    // auto image change in slider handler
    function changeImage() {
      console.log("runslide ", slide);
      console.log("imgs.length", imgs.length - 1);
      // debugger;
      // when slide over then start from 0
      if (slide > imgs.length - 1) {
        console.log("ifslide ", slide);
        slide = 0;
      } 
      else if (slide < 0) { // when click on previous button very begin then it run
        slide = imgs.length - 1;
      }

      if (imgContainer) {
        imgContainer.style.transform = `translateX(${-slide * 500}px)`;
      }
    }

    // reset time interval 
    function resetIntervalHandler() {
      if (interval) {
        clearInterval(interval);
      }

      interval = setInterval(run, 2000);
    }

    // right button handler
    rightBtn?.addEventListener("click", () => {
      slide++;
      changeImage();
      resetIntervalHandler();
    });

    // left button handler
    leftBtn?.addEventListener("click", () => {
      slide--;
      changeImage();
      resetIntervalHandler();
    });
  });

  return (
    <div className="parent">
      <div className="carousel">
        <div className="image-container" id="imgContainer">
          <img
            src="https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80"
            alt="first-image"
          />
          <img
            src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt="second-image"
          />
          <img
            src="https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt="third-image"
          />
          <img
            src="https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80"
            alt="fourth-image"
          />
        </div>

        <div className="buttons-container">
          <button id="left" className="btn">
            Prev
          </button>
          <button id="right" className="btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
