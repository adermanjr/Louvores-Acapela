/* eslint-disable react/prop-types */
import React from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';

function YouTubeIframeResponsive({ youtubeID, autoPlay }) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=${autoPlay}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        rel="0"
        showinfo="0"
        iv_load_policy="0"
      />
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;
