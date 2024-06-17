import React from 'react';
import Slider from "react-slick";
import './BannerCategorias.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BotasImg from '../../assets/banner-categorias/banner-botas.svg';
import ScarpinsImg from '../../assets/banner-categorias/banner-scarpins.svg';
import SapatilhasImg from '../../assets/banner-categorias/banner-sapatilhas.svg';
import SandaliasImg from '../../assets/banner-categorias/banner-sandalias.svg';

const categorias = [
    { name: "Botas", image: BotasImg },
    { name: "Scarpins", image: ScarpinsImg },
    { name: "Sapatilhas", image: SapatilhasImg },
    { name: "Sandálias", image: SandaliasImg }
];

function BannerCategorias() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 3,
        variableWidth: true,
        arrows: false
    };

    return (
        <div className="categorias">
            <span className="categorias-titulo">Categorias</span>
            <div className="categorias-slider">
                <Slider {...settings}>
                    {categorias.map((categoria, indice) => (
                        <div key={indice} className="categorias-item">
                            <img src={categoria.image} alt={categoria.name} />
                            <div className="categoria-nome">{categoria.name}</div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default BannerCategorias;
