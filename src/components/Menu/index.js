import React from 'react';
import Logo from '../../assets/img/logo_louvotes_1.png'
import ButtonLink from './components/ButtonLink';

import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Louvores Acapela em Português"/>
            </a>
            <ButtonLink className="ButtonLink" href="/" >
                Novo vídeo
            </ButtonLink>
                
        </nav>
    );
}

export default Menu;