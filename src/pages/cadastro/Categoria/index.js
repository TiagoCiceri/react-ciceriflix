import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return(
        <PageDefault>
            <h2>Cadastro de categoria</h2>

            <Link to="/">
                Voltar para Home.
            </Link>
        </PageDefault>
    )
};

export default CadastroCategoria;