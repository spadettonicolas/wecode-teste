import React from 'react';
import './TeceiroBanner.scss'
import Slider from "react-slick";
import TeceiroBannerImg1 from '../../assets/terceiro-banner/terceiro-banner1.png';
import TeceiroBannerImg2 from '../../assets/terceiro-banner/terceiro-banner2.png';
import TeceiroBannerImg3 from '../../assets/terceiro-banner/terceiro-banner3.png';
function TeceiroBanner() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
            <div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'end',
                    left: '0px',
                }}
            >
                <ul style={{margin: 0}}> {dots} </ul>
            </div>
        ),
    };


    return (
        <div className="terceiro-banner">
            <div className="terceiro-banner__header">
                <span className="terceiro-banner__titulo">Conheça mais</span>
                <span className="terceiro-banner__subtitulo">Fique por dentro de tudo que acontece na Bebecê.</span>
            </div>
            <div className="terceiro-banner-slider">
                <Slider {...settings}>
                    <div>
                        <div className="terceiro-banner-slider-item">
                            <img src={TeceiroBannerImg1} alt="NOVO LOGO, MESMA ESSÊNCIA."/>
                            <span className="terceiro-banner-slider-item-titulo">NOVO LOGO, MESMA ESSÊNCIA.</span>
                            <span className="terceiro-banner-slider-item-texto">Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!</span>
                            <span className="terceiro-banner-slider-item-link">Saiba mais!</span>
                        </div>
                    </div>
                    <div>
                        <div className="terceiro-banner-slider-item">
                            <img src={TeceiroBannerImg2} alt="É AMANHÃ"/>
                            <span className="terceiro-banner-slider-item-titulo">É AMANHÃ</span>
                            <span className="terceiro-banner-slider-item-texto">SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️</span>
                            <span className="terceiro-banner-slider-item-link">Saiba mais!</span>
                        </div>
                    </div>
                    <div>
                        <div className="terceiro-banner-slider-item">
                            <img src={TeceiroBannerImg3} alt="descubra o glamour em cada passo."/>
                            <span className="terceiro-banner-slider-item-titlo">DESCUBRA O GLAMOUR EM CADA PASSO.</span>
                            <span className="terceiro-banner-slider-item-texto">Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨</span>
                            <span className="terceiro-banner-slider-item-link">Saiba mais!</span>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default TeceiroBanner;