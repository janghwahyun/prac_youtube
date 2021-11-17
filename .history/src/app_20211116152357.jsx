import { useEffect, useState } from 'react';
import './app.css';

function App() {
  //데이터를 받아온 비디오 목록을 가질 수 있는 state.
  const [videos, setVideos] = useState([]);

  //원하는 함수를 등록해 놓으면 컴포넌트가 마운트가 되었거나 업데이트 될 때마다 호출함.
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyDcZ95PjpOXl2sifl-Zd_am8vLtdl7Mh8E',
      requestOptions
    )
      .then(response => response.json())
      //받아온 result에 itmes를 result에 할당
      //그리고 videos가 업데이트 되면 video list컴포넌트에 전달하면 되겠지
      .then(result => setVideos(result.items))
      //
      .catch(error => console.log('error', error));
  }, []);
  return <VideoItem video={video} />;
}

export default App;
