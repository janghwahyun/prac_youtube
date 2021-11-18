import React from 'react';

//props.video.snippet.thumbnails 이렇게 써도 되고
// {video : {snippet}}을 props대신 적용시키면 ->
//snippet.thumbnails으로 줄여 쓸 수 있음
const VideoItem = ({ video: { snippet } }) => (
  <li>
    <img src={snippet.thumbnails.medium.url} alt="video thumnail" />

    <div>
      <p>{snippet.title}</p>
      <p>{snippet.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
