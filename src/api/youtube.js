import axios from 'axios'
const KEY = 'AIzaSyDIBg4QbcLmPdT5P3gx93GjSk3Wy5-Tl2Q'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});
