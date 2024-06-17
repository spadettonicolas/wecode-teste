import React from 'react';
import './HeaderMenu.scss';
import Logo from "../../Logo";

function HeaderMenu({onClose, variant = 1}) {

    return (
        <div className="header-menu-lateral">
            { variant === 1 ? 
            <div className="header-menu-lateral__logo">
                <Logo/>
            </div>
            :
            <div className="header-menu-lateral__cart">
                    <span>Carrinho</span>
            </div>
}
            <button className="header-menu-lateral__botao-fechar" onClick={onClose}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M1 10L0 9L4 5L0 1L1 0L5 4L9 0L10 1L6 5L10 9L9 10L5 6L1 10Z"
                          fill="#8A8A8A"/>
                </svg>
            </button>
        </div>
    );
}

export default HeaderMenu;
