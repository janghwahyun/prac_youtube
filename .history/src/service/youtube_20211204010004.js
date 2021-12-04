import axios from 'axios';

class Youtube {
  constructor(key) {
    this.client = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: key },
    });
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResult: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
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
