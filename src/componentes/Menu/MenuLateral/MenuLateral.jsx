import React from 'react';
import './MenuLateral.scss';
import BannerMenu from "../BannerMenu/BannerMenu";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import MenuItem from "../MenuItem/MenuItem";
import SubMenu from "../SubMenu/SubMenu";

function MenuLateral({isOpen, onClose}) {
    if (!isOpen) return null;

    return (
        <div className="lateral-overlay">
            <div className="lateral">
                <HeaderMenu onClose={onClose}/>
                <BannerMenu/>
                <ul className="menu-lateral">
                    <MenuItem name="Liquida" isActive={false} isChild={false}/>
                    <SubMenu title={"Sapatos"}>
                        <MenuItem name="Scarpins" isActive={false} isChild={true}/>
                        <MenuItem name="Mocassim" isActive={false} isChild={true}/>
                        <MenuItem name="Sapatilhas" isActive={false} isChild={true}/>
                        <MenuItem name="Mules" isActive={false} isChild={true}/>
                        <MenuItem name="Peep Toe" isActive={false} isChild={true}/>
                        <MenuItem name="Oxford" isActive={false} isChild={true}/>
                    </SubMenu>
                    <SubMenu title="Sandálias"/>
                    <SubMenu title="Botas"/>
                    <SubMenu title="Tênis"/>
                    <MenuItem name="Outlet" isActive={true} isChild={false}/>
                </ul>
            </div>
        </div>
    );
}

export default MenuLateral;
