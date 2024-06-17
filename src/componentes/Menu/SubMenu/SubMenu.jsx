import React, { useState } from 'react';
import './SubMenu.scss';
import ArrowRight from "../../Icones/ArrowRight";
import ArrowDown from "../../Icones/ArrowDown";

function SubMenu({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`submenu ${!isOpen ? 'close' : ''}`}>
            <div className="submenu-titulo" onClick={toggleSubMenu}>
                <span className="submenu-link">{title}</span>
                <span className="submenu-link-texto">{isOpen ? <ArrowDown/> : <ArrowRight/>}</span>
            </div>
            <ul
                className={`submenu-itens ${isOpen ? 'open' : ''}`}
            >
                {children}
            </ul>
        </div>
    );
}

export default SubMenu;
