import React, { useState, useEffect} from "react";
import FaixaCep from "../FaixaCep/FaixaCep";
import Logo from "../Logo";
import Lupa from "../Icones/Lupa";
import Menu from "../Icones/Menu";
import Carrinho from "../Icones/Carrinho";
import Conta from "../Icones/Conta";
import "./Header.scss"

const Header = (props) => {

    const { onOpenMenu ,itemsBag, onOpenCard} = props;

    const [deslizou, setDeslizou] = useState(false);
    const [iconeCor, setIconeCor] = useState('white');
    const [itensCarrinho, setItensCarrinho] = useState(0);

    const verificaRolagem = () => {
        if (window.scrollY > 5) {
            setDeslizou(true);
            setIconeCor('black');
        } else {
            setDeslizou(false);
            setIconeCor('white');
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', verificaRolagem);
        return () => {
            window.removeEventListener('scroll', verificaRolagem);
        };
    }, []);

    return (
        <header className="header">
            <FaixaCep/>
            <div className={`header-faixa-logo ${deslizou ? 'header-faixa-logo--scrolled' : ''}`}>
                <div className='header-faixa-logo__esquerda' href="#">
                    <div onClick={onOpenMenu}>
                        <Menu  color={iconeCor} />
                    </div>
                    <Lupa color={iconeCor} />
                </div>
                <Logo color={iconeCor} />
                <div className='header-faixa-logo__direita' href="#">
                    <Conta color={iconeCor} />
                    <div className="header-faixa-logo__carrinho" onClick={onOpenCard} >
                        <Carrinho color={iconeCor} />
                        <span className={`header-faixa-logo__contagem-carrinho ${deslizou ? 'header-icone-ddireita-contagem__carrinho--scrolled' : ''}`}>{itensCarrinho}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;