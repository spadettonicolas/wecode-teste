import React from 'react';
import './Carrinho.scss'
import HeaderMenu from "../../Menu/HeaderMenu/HeaderMenu";
import CarrinhoItem from "../CarrinhoItem/CarrinhoItem";

function Carrinho(props) {
    const { isOpen, onClose, products, onDecrease, onIncrease, onRemove } = props;

    if (!isOpen) return null;

    const calculaSubtotal = () => {
        return products.reduce((acc, product) => acc + (product.price.amount * product.quantity), 0);
    };

    const calculaDesconto = () => {
        return products.reduce((acc, product) => {
            if (product.price.isDiscount) {
                return acc + ((product.price.amount - product.price.isDiscount) * product.quantity);
            }
            return acc;
        }, 0);
    };

    const subtotal = calculaSubtotal();
    const desconto = calculaDesconto();
    const total = subtotal - desconto;

    return (
        <div className="carrinho-overlay">
            <div className="carrinho">
                <HeaderMenu onClose={onClose} variant={2} />
                <div className="carrinho-container">
                    {products.map((product, index) => (
                        <CarrinhoItem item={product} key={index} onDecrease={onDecrease} onIncrease={onIncrease} onRemove={onRemove} />
                    ))}
                </div>
                <div className="carrinho-footer">
                    <div className="carrinho-total">
                        <span>Subtotal</span>
                        <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                    </div>
                    <div className="carrinho-total">
                        <span>Desconto</span>
                        <span className="desconto">-R$ {desconto.toFixed(2).replace(".", ",")}</span>
                    </div>
                    <div className="carrinho-total">
                        <span>Total</span>
                        <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                    </div>
                    <div className="carrinho-confirma">
                        <button>Finalizar pedido</button>
                        <span onClick={onClose}>Continuar comprando</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrinho;
