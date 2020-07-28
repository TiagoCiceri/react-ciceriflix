import React from 'react';
import PageNotFound from '../../assets/img/pageNotFound.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ImgContainer = styled.div`    
    position: relative;
    height: 500px;
    background: #ebebed;
`;

const Imagem = styled.img` 
    width: 250px;
    height: auto;    
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    margin: auto;
`;

function NotFoundPage(){
    return(
        <div>
            <p style={{ textAlign: "center" }}  >
               <Link to="/">Voltar para Home.</Link>
            </p>
            <ImgContainer>
              <Imagem  
                type="img" 
                src={PageNotFound} >               
              </Imagem>
            </ImgContainer>
        </div>
    )
};

export default NotFoundPage;