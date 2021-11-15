import { useEffect, useState } from 'react';
import './app.css';

function App() {
  //데이터를 받아온 비디오 목록을 가질 수 있는 state.
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState('1117jhh');
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
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, []);
  return <h1>다시 시작하는거야!</h1>;
}

export default App;
