import React, {useEffect, useState} from 'react';
import './CardProdutos.scss';
import Slider from "react-slick";
import {getProducts} from "../../utils";
import FavoriteIco from "../Icones/FavoriteIco";
import CardIcon from "../Icones/CardIcon";
import DialogoProduto from '../DialogProdutos/DialogProdutos';

function CardProdutos(props) {
    const [produtos, setProdutos] = useState([]);
    const [favoritos, setFavoritos] = useState({}); // Estado para controlar os favoritos
    const [dialogAberto, setdialogAberto] = useState(false);
    const [selecionarProdutos, setSelecionarProdutos] = useState(null);

    const {addToCart } = props;

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
    };

    useEffect(() => {
        getProducts().then((data) => {
            setProdutos(data);
        });
    }, []);

    function toggleFavorite(id) {
        setFavoritos((prevFavoritos) => ({
            ...prevFavoritos,
            [id]: !prevFavoritos[id],
        }));
    }

    function calculaPorcentagemDesconto(produto) {
        if (produto.price.isDiscount === null) {
            return 0;
        }
        const precoOriginal = produto.price.amount;
        const precoDesconto = produto.price.isDiscount;
        const porcentagemDesconto = ((precoOriginal - precoDesconto) / precoOriginal) * 100;
        return Math.round(porcentagemDesconto);
    }
    function abreDialogo(produto) {
        setSelecionarProdutos(produto);
        setdialogAberto(true);
    }

    function fechaDialogo() {
        setdialogAberto(false);
        setSelecionarProdutos(null);
    }

    return (
        <div className="card-produtos">
            <span className="titulo">Lançamentos</span>
            <div className="produtos-slider">
                <Slider {...settings}>
                    {produtos.map((produto, index) => (
                        <div key={index} className="produtos-item">
                            <div className="produtos-item-container">
                                <div className="produto" style={{backgroundImage: `url(${produto.image})`}}>
                                    <div className="produtos-ico-favorito" onClick={() => toggleFavorite(produto.id)}>
                                        <FavoriteIco color={favoritos[produto.id] ? "black" : "white"}/>
                                    </div>
                                    <div className="produtos-ico-carrinho" onClick={() => abreDialogo(produto)}>
                                        <CardIcon variant={2}/>
                                    </div>
                                    {produto.price.isDiscount !== null && (
                                        <span className="porcentagem-desconto">{calculaPorcentagemDesconto(produto)}% OFF</span>
                                    )}
                                </div>
                                <div className="produtos-item-detail">

                                <span className="nome-produtos">
                                    {produto.name}
                                </span>
                                    {produto.price.isDiscount !== null ? (
                                        <p className="preco">
                                            <span className="preco-original">R$ {produto.price.amount.toFixed(2)}</span>
                                            <span>R$ {produto.price.isDiscount.toFixed(2)}</span>
                                        </p>

                                    ) : (
                                        <p className="preco">R$ {produto.price.amount.toFixed(2)}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {dialogAberto && (
                <DialogoProduto
                    isOpen={dialogAberto}
                    onClose={fechaDialogo}
                    product={selecionarProdutos}
                    addToCart={addToCart}
                />
            )}
        </div>
    );
}

export default CardProdutos;
