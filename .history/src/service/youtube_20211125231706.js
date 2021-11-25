class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  mostPopular() {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyDcZ95PjpOXl2sifl-Zd_am8vLtdl7Mh8E',
      requestOptions
    )
      .then(response => response.json())
      //받아온 result에 itmes를 result에 할당
      //그리고 videos가 업데이트 되면 video list컴포넌트에 전달하면 되겠지
      .then(result => setVideos(result.items));
  }
}
