import React, { useEffect, useState } from 'react';
//import Menu from '../../components/Menu';
import BannerMain from "../../components/BannerMain";
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideo) => {
        console.log(categoriasComVideo);
        setDadosIniciais(categoriasComVideo);
      })
      .catch((err) =>{
        console.log(err.message);
      })
  },[]);

  return (
    //<div style={{ background: "#141414" }} >
    <PageDefault paddingAll={0} linkButton="/cadastro/video" textButton="Novo Vídeo" >
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}  

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0){
          return(
            <div key={categoria.id}>
              <BannerMain 
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              
              <Carousel 
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />

            </div>
          )
        }

        return (
          <Carousel 
            key={categoria.id}
            category={categoria}
          />
        );

      })}

    </PageDefault>
  );
}

export default Home;
