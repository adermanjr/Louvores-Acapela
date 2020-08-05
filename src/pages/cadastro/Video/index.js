/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const jsonVideo = {
    id: '', categoriaId: '', titulo: '', url: '', letra: '',
  };
  const [categorias, setCategorias] = useState([]);
  const listTitleCategorias = categorias.map(({ titulo }) => titulo);
  const { values, handleChange, clearForm } = useForm(jsonVideo);

  useEffect(() => {
    categoriasRepository.getAll()
      .then((allCategorias) => {
        setCategorias(allCategorias);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de vídeo:
        {values.titulo}
      </h1>
      <form onSubmit={(e) => {
        e.preventDefault();

        const categoriaIdSelected = categorias.find((categ) => categ.titulo === values.categoriaId);

        values.categoriaId = categoriaIdSelected.id;

        videosRepository.create(values)
          .then(() => {
            clearForm();
            history.push('/');
          });
      }}
      >
        <FormField
          label="Nome"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          type="text"
          name="categoriaId"
          value={values.categoriaId}
          onChange={handleChange}
          suggestions={listTitleCategorias}
        />
        <FormField
          label="Letra"
          type="text"
          name="letra"
          value={values.letra}
          onChange={handleChange}
        />
        {/*
          <div>
            <label htmlFor="categoriaId">
              Categoria:
              <input
                type="text"
                name="categoriaId"
                value={values.categoriaId}
                onChange={handleChange}
                autoComplete="off"
                list="categList"
              />
              <datalist id="categList" name="categorias">
                {categorias.map((categoria) => (
                  <option value={categoria.titulo}>{categoria.titulo}</option>
                ))}
              </datalist>
            </label>
          </div>
        */}
        <button className="ButtonLink" style={{ background: '#000', color: '#FFF' }}>Cadastrar</button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastro de categoria
      </Link>
    </PageDefault>
  );
}
export default CadastroVideo;
