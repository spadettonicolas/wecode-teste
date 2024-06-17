import React from 'react';
import './MenuItem.scss';

function MenuItem({name, isActive, isChild}) {

    return <li className={`menu-item ${isChild ? 'menu-item-child ' : ''}  ${isActive ? 'menu-item-active' : ''}`}>{name}</li>;
}

export default MenuItem;
