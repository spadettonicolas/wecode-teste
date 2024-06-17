import React from 'react';
import './CarrinhoItem.scss';

function CartItem(props) {

    const { item , onDecrease, onIncrease, onRemove } = props;

    return (
        <div className="carrinho-item">
            <div className="carrinho-item-container">
                <img className="item-img" src={item.image} alt={item.name}/>
                <div className="produto-info">
                    <div className="item-infos">
                        <div className="item-nome">
                            {item.name.length > 47 ? item.name.substring(0, 47) + '...' : item.name}
                        </div>
                        <div className="item-tamanho">Tamanho: {item.size}</div>
                    </div>
                    <div className="item-valor">
                        <div className="valor">R$ {item.price.amount.toFixed(2).replace(".", ",")}</div>
                    </div>
                </div>

            </div>
            <div className="item-quantidade">
                <div className="item-quantidade-controles">
                    <div className={item.quantity <= 1 ? 'decrease-disabled': '' } onClick={() => onDecrease(item.id, item.size)}>-</div>
                    <span>{item.quantity}</span>
                    <div onClick={() => onIncrease(item.id, item.size)}>+</div>
                </div>
                <span className="remove-item" onClick={() => onRemove(item.id, item.size)}>Remover</span>
            </div>

        </div>
    );
}

export default CartItem;
