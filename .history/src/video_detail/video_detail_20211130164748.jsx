import React from 'react';
import styles from './video_detial.module.css';

//선택된 비디오
const VideoDetail = ({ video }) => (
  <section className={styles.detail}>
    <iframe
      type="text/html"
      width="100%"
      height="405"
      src="https://www.youtube.com/embed/M7lc1UVf-VE"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </section>
);

export default VideoDetail;
