import React from 'react';
import './Noticia.scss';

function Noticia() {
    return (

        <div className="signup-form">
            <h2>Cadastre-se e receba <span>10% OFF</span> na sua primeira compra!</h2>
            <form>
                <input type="email" placeholder="Digite seu e-mail"/>
                <button type="submit">ENVIAR</button>
            </form>
        </div>
    );
}

export default Noticia;
