/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import { VideoCardContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor, videoId, onClick }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

  async function handleClickCard(e) {
    e.preventDefault();
    await onClick(videoId);
  }

  return (
    <VideoCardContainer
      url={image}
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
      onClick={handleClickCard}
    />
  );
}

export default VideoCard;
