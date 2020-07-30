import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


function CadastroCategoria(){
    const dadosCategoria = {
        nome: '',
        descricao: '',
        cor: '#000',
    };
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

    return(
        <PageDefault>
            <h2>Cadastro de categoria: {dados.nome}</h2>

            <form onSubmit={handleSubmit}>
                <FormField 
                    label="Nome: "
                    type="text" 
                    name="nome" 
                    value={dados.nome}
                    onChange={handleChange}
                />

                <FormField 
                    label="Descrição: "
                    type="text" 
                    name="descricao" 
                    value={dados.descricao}
                    onChange={handleChange}
                />

                <FormField 
                    label="Cor: "
                    type="color" 
                    name="cor" 
                    value={dados.cor}
                    onChange={handleChange}
                />

                <button>Cadastrar</button>

            </form>

            <ul>
                {categorias.map((categoria, indice) =>{
                    return(
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Voltar para Home.
            </Link>
        </PageDefault>
    )
};

export default CadastroCategoria;