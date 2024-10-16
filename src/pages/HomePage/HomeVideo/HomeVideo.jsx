import React, { useRef, useState } from "react";
import styles from "./HomeVideo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function HomeVideo({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="position-relative">
      <video
        ref={videoRef}
        className="w-100"
        muted
        loop
        autoPlay={isPlaying} // Play automatically if `isPlaying` is true
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className={styles.vidoeButton} onClick={handlePlayPause}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
    </div>
  );
}
