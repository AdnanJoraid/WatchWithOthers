import axios from 'axios'
const KEY = 'AIzaSyCdzRw5lAVkVMYYYPOGAPTnH5Pcy52BjE4'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});
