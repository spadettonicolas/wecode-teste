import React from 'react';
import './BannerPrincipal.scss';
import Slider from "react-slick";

function BannerPrincipal() {

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
                    bottom: '32px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'end',
                    right: '32px',
                }}
            >
                <ul style={{margin: 0}}> {dots} </ul>
            </div>
        ),
    };

    return (

        <div className="banner-principal">
            <Slider {...settings}>

                <div className="img1">
                    <div className="banner-botao">
                        <button className="botao">Conheça agora!</button>
                    </div>
                </div>
                <div className="img3">


                </div>
                <div className="img2">
                    <div className="banner-butao">
                        <button className="botao">Ver coleção comppleta</button>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default BannerPrincipal;