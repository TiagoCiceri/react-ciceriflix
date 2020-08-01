import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import useForm from '../../../hooks/useForms';
import config from '../../../config';
import '../Cadastro.css';

function CadastroCategoria(){
    const dadosCategoria = {
        id: '',
        titulo: '',
        cor: '',
    }

    const { clearForm, dados, handleChange } = useForm(dadosCategoria);

    const [categorias, setCategorias] =  useState([]);

    function handleSubmit(e){
        e.preventDefault();
        setCategorias([...categorias, dados]);
        clearForm();
    }

    useEffect(() => {        
        fetch(config.URL_BACKEND+'/categorias')
            .then(async (respostaServer) => {
                if (respostaServer.ok){
                    const dadosConvertidos = await respostaServer.json();
                    console.log(dadosConvertidos);
                    setCategorias(dadosConvertidos);
                    return;
                }
                throw new Error('Não foi possível pegar os dados');
            })
    },[])

    return(
        <PageDefault paddingAll={0} linkButton="/cadastro/video" textButton="Novo Vídeo">
            <Container>
                <div className="Row">
                    <div className="Column"> 
                        <h2>Cadastro de categoria: 
                            <strong style={{ color: '#DB202C'}}>
                                {' '+dados.titulo}
                            </strong> 
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <FormField 
                                label="Título: "
                                type="text" 
                                name="titulo" 
                                value={dados.titulo}
                                onChange={handleChange}
                            />

                            <FormField 
                                label="Cor: "
                                type="color" 
                                name="cor" 
                                value={dados.cor}
                                onChange={handleChange}
                            />

                            <Button className="ButtonCad">
                                Cadastrar
                            </Button>

                        </form>
                    </div>

                    <div className="Column">
                        <h3>Categorias gravadas:</h3>
                        <ul>
                            {categorias.map((categoria, indice) =>{
                                return(
                                    <li key={categoria.id}>
                                        {categoria.titulo}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </Container>
            
{/*             <Link to="/">
                Voltar para Home.
            </Link>
 */}
        </PageDefault>
    )
};

export default CadastroCategoria;