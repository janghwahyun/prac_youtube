import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const Videolist = ({ videos, onVideoClick, display }) => (
  <ul className={styles.videos}>
    {videos.map(video => (
      <VideoItem
        key={video.id}
        video={video}
        onVideoClick={onVideoClick}
        display={display}
      /> //뱅글뱅글 돈 video를 전달할거임.
    ))}
  </ul>
);

export default Videolist;
