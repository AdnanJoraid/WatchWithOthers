import axios from 'axios'
const KEY = 'AIzaSyDVHezR42TuhXwtuIw0x7Y4XNzsDygJO3s'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});
