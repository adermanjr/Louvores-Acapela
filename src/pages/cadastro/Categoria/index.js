/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const jsonCateg = { id: '', titulo: '', cor: '' };
  const [categorias, setCategorias] = useState([]);
  const { values, handleChange, clearForm } = useForm(jsonCateg);

  useEffect(() => {
    categoriasRepository.getAll()
      .then((allCategorias) => {
        setCategorias(allCategorias);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
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
          label="Descrição"
          type="textarea"
          name="desc"
          value={values.desc}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/*
          <div>
              <label>
                  Descrição:
                  <input type="textarea"
                      name="desc"
                      value={categoria.desc}
                      onChange={handleChange}/>
              </label>
          </div>

          <div>
              <label>
                  Cor:
                  <input type="color"
                      name="cor"
                      value={categoria.cor}
                      onChange={handleChange}/>
              </label>
          </div>
                */}
        <button className="ButtonLink" style={{ background: '#000', color: '#FFF' }}>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, i) => (
          <li key={i} style={{ background: categoria.cor }}>
            {categoria.titulo}
            {' '}
            {categoria.desc}
            {' '}
            {categoria.cor}
          </li>
        ))}
      </ul>
      <Link to="/">
        Home
      </Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
