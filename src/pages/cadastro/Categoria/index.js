import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import '../Cadastro.css';

function CadastroCategoria(){
    const dadosCategoria = {
        id: '',
        titulo: '',
        cor: '',
    }

    const [categorias, setCategorias] =  useState([]);
    const [dados, setDados] = useState(dadosCategoria);

    function setValue(chave, valor){
        setDados({
            ...dados,
            [chave]: valor,
        })
    }

    function handleChange(e){
        setValue(e.target.getAttribute('name'), 
                 e.target.value);        
    }

    function handleSubmit(e){
        e.preventDefault();
        setCategorias([...categorias, dados]);
        setValue(dadosCategoria);
    }

    useEffect(() => {
        if (window.location.href.includes('localhost')){
            const URL = 'http://localhost:8080/categorias';

            fetch(URL)
                .then(async (respostaServer) => {
                    if (respostaServer.ok){
                        const dadosConvertidos = await respostaServer.json();
                        console.log(dadosConvertidos);
                        setCategorias(dadosConvertidos);
                        return;
                    }
                    throw new Error('Não foi possível pegar os dados');
                })
        }
    },[])

    return(
        <PageDefault>
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
            
            <Link to="/">
                Voltar para Home.
            </Link>

        </PageDefault>
    )
};

export default CadastroCategoria;