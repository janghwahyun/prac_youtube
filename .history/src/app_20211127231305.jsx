import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import Videolist from './components/video_list/video_list';
import VideoDetail from './video_detail/video_detail';

function App({ youtube }) {
  //데이터를 받아온 비디오 목록을 가질 수 있는 state.
  const [videos, setVideos] = useState([]);
  const [setedVideo, setSelectedVideo] = useState(null);
  const search = query => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos));
  };

  //원하는 함수를 등록해 놓으면 컴포넌트가 마운트가 되었거나 업데이트 될 때마다 호출함.
  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      {/* onserch가 발생하면 search를 호출해 주면 되겠죠 */}
      <SearchHeader onSearch={search} />
      {setSelectedVideo && <VideoDetail />}
      <Videolist videos={videos} />
    </div>
  );
}

export default App;
