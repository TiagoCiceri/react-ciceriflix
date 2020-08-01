import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForms';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import Container from '../../../components/Container';
import '../Cadastro.css';

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo);
    const { dados, handleChange } = useForm({});

    function handleSubmit(e) {
        e.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === dados.categoria);

        videosRepository.create({
            titulo: dados.titulo,
            url: dados.url,
            categoriaID: categoriaEscolhida.id,
        })
            .then(() => {
                history.push('/');
            })
    }

    useEffect(() => {
        categoriasRepository.getAll()
            .then((categoriasFormServer) => {
                setCategorias(categoriasFormServer);
            })
    }, [])

    return (
        <PageDefault paddingAll={0} linkButton="/cadastro/categoria" textButton="Nova Categoria">
            <Container>
                <h2>Cadastro de Videos</h2>

                <form onSubmit={handleSubmit}>
                    <FormField
                        label="Título: "
                        name="titulo"
                        value={dados.titulo}
                        onChange={handleChange}
                    />

                    <FormField
                        label="URL: "
                        name="url"
                        value={dados.url}
                        onChange={handleChange}
                    />
                    <FormField
                        label="Categoria: "
                        name="categoria"
                        value={dados.categoria}
                        onChange={handleChange}
                        suggestions={categoryTitles}
                    />

                    <Button className="ButtonCad">
                        Cadastrar
                </Button>

                </form>
            </Container>
            {/*             <br />
            <Link to="/cadastro/categoria">
                Cadastrar Categoria.
            </Link> */}

        </PageDefault>
    )
};

export default CadastroVideo;