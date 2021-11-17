import React from 'react';
import VideoItem from '../video_item/video_item';

const video_list = props => (
  <ul>
    {props.video.map(video => (
      <VideoItem video={video} />
    ))}
  </ul>
);

export default video_list;
