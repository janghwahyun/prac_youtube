import React from 'react';
import styles from './video_item.module.css';

//props.video.snippet.thumbnails 이렇게 써도 되고
// {video : {snippet}}을 props대신 적용시키면 ->
//snippet.thumbnails으로 줄여 쓸 수 있음
const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.video}>
    <img
      className={styles.thumbnails}
      src={snippet.thumbnails.medium.url}
      alt="video thumnail"
    />

    <di>
      <p className={styles.title}>{snippet.title}</p>
      <p className={styles.channel}>{snippet.channelTitle}</p>
    </di>
  </li>
);

export default VideoItem;
