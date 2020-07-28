import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return(
        <PageDefault>
            <h2>Cadastro de videos</h2>

            <Link to="/cadastro/categoria">
                Cadastro de categoria.
            </Link>
        </PageDefault>
    )
};

export default CadastroVideo;