// @ts-nocheck
import { useRef } from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
function App() {
  const audioRef = useRef(null);

  const btnHandler = (index: any) => {
    // console.log("index ", sounds[index]);
    if (audioRef && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = `sounds/${sounds[index]}.mp3`;
      audioRef.current.play();
    }
  };

  return (
    <div className="parent">
      {sounds?.map((item) => {
        return (
          <AudioPlayer
            src={`sounds/${item}.mp3`} // Make sure to adjust the path based on your project structure
            audioRef={audioRef}
          />
          // <audio controls id="wrong" src={`sounds/${item}.mp3`}></audio>
        );
      })}
      <div className="child-container">
        {sounds?.map((item, index) => {
          return (
            <button key={index} className="btn" onClick={() => btnHandler(index)}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
