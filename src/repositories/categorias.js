import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (resonseServer) => {
      if (resonseServer.ok) {
        const resposta = await resonseServer.json();
        return resposta;
      }
      throw new Error('Error on getAllWithVideos');
    });
}

function getAll() {
  return fetch(URL_CATEGORIAS)
    .then(async (resonseServer) => {
      if (resonseServer.ok) {
        const resposta = await resonseServer.json();
        return resposta;
      }
      throw new Error('Error on getAll');
    });
}

function create(categoria) {
  return fetch(URL_CATEGORIAS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoria),
  })
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const resposta = await responseServer.json();
        return resposta;
      }
      throw new Error('Error on create');
    });
}

function del(id) {
  return fetch(`${URL_CATEGORIAS}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const resposta = await responseServer.json();
        return resposta;
      }
      throw new Error('Error on create');
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
  del,
};
