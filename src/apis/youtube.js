import axios from 'axios';

// ADD your API Key from https://console.developers.google.com to use the youtube API
const KEY = 'YOUR_API_KEY_FROM_CONSOLE_GOOGLE_DEVELOPERS_DOT_COM_WEBSITE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});
