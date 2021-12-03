import React from 'react';
import styles from './video_item.module.css';

//props.video.snippet.thumbnails 이렇게 써도 되고
// {video : {snippet}}을 props대신 적용시키면 ->
//snippet.thumbnails으로 줄여 쓸 수 있음
// 비디오 아이템은 비디오나 클릭이나 디스플레이가 바뀌지 않으면 재랜더링 될 이유가 전혀없다
const VideoItem = memo( ({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === 'list' ? 'styles.list' : 'styles.grid';
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumnail"
        />

        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};);
export default VideoItem;
