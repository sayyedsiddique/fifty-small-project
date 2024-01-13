import React from "react";

interface AudioPlayerProps {
  src: string;
  audioRef: React.MutableRefObject<null>;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, audioRef }) => {
  return (
    <div key={src}>
      <audio
        key={src}
        ref={audioRef}
        // controls
        src={src} // Make sure to adjust the path based on your project structure
      />
    </div>
  );
};

export default AudioPlayer;
