import React from 'react';
import VideoItem from '../video_item/video_item';

const Videolist = props => (
  <ul className={styles.videos}>
    {props.videos.map(video => (
      <VideoItem key={video.id} video={video} /> //뱅글뱅글 돈 video를 전달할거임.
    ))}
  </ul>
);

export default Videolist;
