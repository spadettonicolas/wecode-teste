import React from 'react';
import './Footer.scss';
import Logo from "../Logo";
import Instagram from "../Icones/social/Instagram";
import Facebook from "../Icones/social/Facebook";
import Pinterest from "../Icones/social/Pinterest";
import Twitter from "../Icones/social/Twitter";
import Tiktok from "../Icones/social/Tiktok";

function Footer() {

    return (
        <div className="footer">
            <div className="logo-container">
                <Logo color="#FFE9DC" width={393} height={92}/>
            </div>
            <div className="icones-social">
                <Instagram/>
                <Facebook/>
                <Pinterest/>
                <Twitter/>
                <Tiktok/>
            </div>
            <div className="links">
                <span className="titulo">Sobre a empresa</span>
                <span className="texto">Quem somos</span>
                <span className="texto">Fale conosco</span>
            </div>
            <div className="links">
                <span className="titulo">Políticas</span>
                <span className="texto">Política de Privacidade</span>
                <span className="texto">Termos de Uso</span>
                <span className="texto">Política de Entrega</span>
                <span className="texto">Política de Cupom e Descontos</span>
            </div>
        </div>
    );
}

export default Footer;