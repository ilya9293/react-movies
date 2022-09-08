const KEY = '88cb0f604f2d1a4c96f62a0a73ad3d75';

const apiTrends = async () => {
  //   return  fetch(url).then(response => response.json());
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`,
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const apiSearch = async query => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const apiOneMovie = async id => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`,
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const apiCast = async id => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`,
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const apiReview = async id => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

export { apiTrends, apiSearch, apiOneMovie, apiCast, apiReview };
