import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const boxRefs = useRef<Array<React.MutableRefObject<HTMLDivElement | null>>>(
    []
  );

  useEffect(() => {
    const checkBoxes = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;
      console.log("boxRefs ", boxRefs);

      boxRefs.current.map((box: any) => {
        // console.log("SINGLEboxRef ", box && box.current)
        if (box && box.current) {
          const boxTop = box.current.getBoundingClientRect().top;
          console.log("boxTop ", boxTop);

          if (boxTop < triggerBottom) {
            box && box.current.classList.add("show");
          } else {
            box && box.current.classList.remove("show");
          }
        }
      });
    };

    // Add event listener when the component mounts
    window.addEventListener("scroll", checkBoxes);

    checkBoxes();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", checkBoxes);
    };
  }, []);

  // addBoxRef function creates a new React.MutableRefObject for each element
  // and assigns the element reference to it
  const addBoxRef = (element: HTMLDivElement | null) => {
    if (element) {
      boxRefs.current.push(React.createRef<HTMLDivElement>());
      boxRefs.current[boxRefs.current.length - 1].current = element;
    }
  };

  return (
    <div className="parent">
      <h1>Scroll to see the animation</h1>

      <div className="box" ref={(el) => addBoxRef(el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => addBoxRef(el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => addBoxRef(el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => addBoxRef(el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => addBoxRef(el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => addBoxRef(el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => addBoxRef(el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => addBoxRef(el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => addBoxRef(el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => addBoxRef(el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => addBoxRef(el)}>
        <h2>Content</h2>
      </div>
    </div>
  );
}

export default App;
