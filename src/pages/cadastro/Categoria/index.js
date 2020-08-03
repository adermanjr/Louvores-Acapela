/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const jsonCateg = { id: '', titulo: '', cor: '' };
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(jsonCateg);

  function handleSetInput(k, v) {
    setCategoria({
      ...categoria,
      [k]: v,
    });
  }

  function handleChange(infoEvent) {
    const { target } = infoEvent;
    handleSetInput(target.getAttribute('name'), target.value);
  }

  useEffect(() => {
    /*
      package.json:
        * vercel -> roda scprit build
        * heroku -> roda scprit server
    */
    const URL = window.location.href.includes('localhost') ? 'http://localhost:8080/categorias' : '';

    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {categoria.titulo}
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        setCategorias([
          ...categorias,
          categoria,
        ]);
        setCategoria(jsonCateg);
      }}
      >

        <FormField
          label="Nome"
          type="text"
          name="titulo"
          value={categoria.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="desc"
          value={categoria.desc}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={categoria.cor}
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
        {categorias.map((categ, i) => (
          <li key={i} style={{ background: categ.cor }}>
            {categ.titulo}
            {' '}
            {categ.desc}
            {' '}
            {categ.cor}
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
