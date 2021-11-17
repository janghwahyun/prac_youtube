import React from 'react';
import VideoItem from '../video_item/video_item';

const video_list = props => (
  <ul>
    {props.video.map(video => (
      <VideoItem key={video.id} video={video} /> //뱅글뱅글 돈 video를 전달할거임.
    ))}
  </ul>
);

export default video_list;
