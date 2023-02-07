import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className='Navbar'>
                <ul className='NavbarList'>
                    <a href='#nuevos-miembros'><li>Nuevos miembros</li></a>
                    <a href='#informaciones'><li>Informaciones</li></a>
                    <a href='#canales-de-texto'><li>Canales de Texto</li></a>
                    <a href='#juegos'><li>Juegos</li></a>
                    <a href='#bots'><li>Bots</li></a>
                    <a href='#estudios'><li>Estudios</li></a>
                    <a href='#nsfw'><li>NSFW</li></a>
                </ul>
                <input type='text' placeholder='Buscar...'></input>
            </div>
        );
    }
}

export default Navbar;