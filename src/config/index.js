const URL_BACKEND = window.location.href.includes('localhost') ? 'http://localhost:8080' : 'https://louvores-db.herokuapp.com';
// https://louvores-db.herokuapp.com/categorias?_embed=videos
export default {
  URL_BACKEND,
};
