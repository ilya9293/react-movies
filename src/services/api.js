const KEY = '88cb0f604f2d1a4c96f62a0a73ad3d75';
const urlTrends = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;

const apiTrends = async () => {
  //   return  fetch(url).then(response => response.json());
  const res = await fetch(urlTrends);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const apiSearch = async query => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

export { apiTrends, apiSearch };
