import React from 'react';

const VideoItem = props => (
  <li>
    <img src={props.video.snippet.thumbnails.medium.url} alt="video thumnail" />
  </li>
  <div>
      <p>{props.video.snippet.title}</p>
        <p>{props.video.snippet.channelTitle}</p>
  </div>
);

export default VideoItem;
