import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function getAll() {
  return fetch(URL_VIDEOS)
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const resposta = await responseServer.json();
        return resposta;
      }
      throw new Error('Error on getAll');
    });
}

function getById(id) {
  return fetch(`${URL_VIDEOS}/${id}`)
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const resposta = await responseServer.json();
        return resposta;
      }
      throw new Error(`Error on getById(${id})`);
    });
}

function create(video) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
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
  return fetch(`${URL_VIDEOS}/${id}`, {
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
  getAll,
  create,
  del,
  getById,
};
