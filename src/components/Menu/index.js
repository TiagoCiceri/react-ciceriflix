import React from 'react';
import  { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../components/ButtonLink';

function Menu({ linkButton, textButton }){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="CiceriFlix logo" />
            </Link>

            <Button 
             as={Link} 
             className="ButtonLink" 
             to={linkButton}>
                {textButton}
            </Button>
        </nav>
    )
}

export default Menu;