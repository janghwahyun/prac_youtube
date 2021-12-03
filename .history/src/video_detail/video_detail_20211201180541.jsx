import React from 'react';
import styles from './video_detail.module.css';

//선택된 비디오
const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullscreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.channelTitle}</h3>
    {/* pre태그는 텍스트가 연결되어 있으면 원래 공간을 넘어가는 현상이 발생 -> css 해결 가능 */}
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default VideoDetail;
