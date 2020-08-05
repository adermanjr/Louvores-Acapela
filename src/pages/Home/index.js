/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import useBannerChange from '../../hooks/useBannerChange';
import categoriasRepository from '../../repositories/categorias';
import videosRepository from '../../repositories/videos';

/*
    package.json:
      * vercel -> roda scprit build
      * heroku -> roda scprit server
*/
function Home() {
  const [categXVideos, setCategXVideos] = useState([]);
  const jsonVideo = {
    titulo: 'A Ele a Glória', url: 'https://www.youtube.com/watch?v=wRJ1COqLsEY', letra: 'Porque Dele e por Ele<br>Para Ele são todas as coisas. (2x)<br><br><i>Coro</i>:<br>A Ele a glória! (3x)<br>Pra sempre, amém!<br><br><Quão profundas riquezas,<br>O saber e o conhecer de Deus!<br>Quão insondáveis<br>Seus juízos e Seus caminhos!',
  };
  const {
    videoBanner, setVideo, autoPlay, setAuto,
  } = useBannerChange(jsonVideo);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setCategXVideos(categoriasComVideos);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  async function handleChangeBanner(videoId) {
    setAuto('1');

    await videosRepository.getById(videoId)
      .then((video) => {
        console.log(video.titulo);
        setVideo(video);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  return (
    <PageDefault paddingAll={0}>
      <Menu />
      {categXVideos.length === 0 && (<div>Loading...</div>)}
      {/* JSON.stringify(categXVideos) */}

      {categXVideos.length > 0 && (
        <>
          <BannerMain
            videoTitle={videoBanner.titulo}
            url={videoBanner.url}
            videoDescription={videoBanner.letra}
            autoPlay={autoPlay}
          />

          <Carousel
            ignoreFirstVideo
            category={categXVideos[0]}
            onClick={handleChangeBanner}
          />

          <Carousel
            category={categXVideos[1]}
            onClick={handleChangeBanner}
          />
        </>
      )}

      {/*
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      */}
    </PageDefault>
  );
}

export default Home;
