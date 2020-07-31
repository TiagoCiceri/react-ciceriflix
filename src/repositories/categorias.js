import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

function getAll(){
    return fetch(URL_CATEGORIAS)
            .then(async (respostaServidor) => {

                if (respostaServidor.ok){
                    const respostaConvertida = await respostaServidor.json();
                    return respostaConvertida;    
                }

                throw new Error('Não foi possível obter os dados :( ');
            });  
}

function getAllWithVideos(){
    
    return fetch(`${URL_CATEGORIAS}?_embed=videos`)
            .then(async (respostaServidor) => {

                if (respostaServidor.ok){
                    const respostaConvertida = await respostaServidor.json();                
                    return respostaConvertida;    
                }

                throw new Error('Não foi possível obter os dados :( ');
            });
}

export default {
    getAll,
    getAllWithVideos,
}