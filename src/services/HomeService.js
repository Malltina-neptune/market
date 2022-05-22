const API_URL = 'https://api.malltina.net/search/v2?q=shoes';

const getData = fetch(API_URL, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default getData;
