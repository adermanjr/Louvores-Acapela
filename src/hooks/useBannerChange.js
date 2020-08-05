import { useState } from 'react';

function useBannerChange(initValues) {
  const [videoBanner, setVideoBanner] = useState(initValues);
  const [autoPlay, setAutoPlay] = useState('0');

  function setVideo(video) {
    setVideoBanner(video);
  }

  function setAuto(value) {
    setAutoPlay(value);
  }

  return {
    videoBanner,
    setVideo,
    autoPlay,
    setAuto,
  };
}

export default useBannerChange;
