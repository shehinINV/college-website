/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Videoplayer.css';
import video from '../../assets/college-video.mp4';
import { useRef } from 'react';

const Videoplayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={playState ? 'video-player' : 'video-player hide'}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default Videoplayer;
