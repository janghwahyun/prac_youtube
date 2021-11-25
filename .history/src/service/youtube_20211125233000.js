class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  mostPopular() {
    return (
      fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=${this.key}`,
        this.getRequestOptions
      )
        .then(response => response.json())
        //받아온 result에 itmes를 result에 할당
        //그리고 videos가 업데이트 되면 video list컴포넌트에 전달하면 되겠지
        .then(result => result.items)
    );
  }

  search(query) {
    return (
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&type=&key=${this.key}`,
        this.getRequestOptions
      )
        .then(response => response.json())
        //기존의 item정보를 유지하고 아이디만 오브젝트가 아니라 item에 있는 videoId로 덮어줄거임
        .then(result =>
          result.items.map(item => ({ ...item, id: item.id.videoId }))
        )
    );
  }
}

export default Youtube;
