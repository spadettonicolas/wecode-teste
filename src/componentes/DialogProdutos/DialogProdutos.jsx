import React, {useState} from "react";
import './DialogProdutos.scss';
import CardIcon from "../Icones/Carrinho";

function DialogProduto(props) {
    const {isOpen, onClose, product, addToCart } = props;
    const [selectedSize, setSelectedSize] = useState(null);

    if (!isOpen || !product) {
        return null;
    }

    const availableSizes = [34, 35, 36, 37, 38, 39, 40];
    const sizesUnavailable = [42];

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product, selectedSize);
            onClose();
        }
    };

    return (
        <div className="product-dialog-overlay">
            <div className="product-dialog">
                <button className="dialog__close-button" onClick={onClose}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector" d="M1 10L0 9L4 5L0 1L1 0L5 4L9 0L10 1L6 5L10 9L9 10L5 6L1 10Z"
                              fill="#8A8A8A"/>
                    </svg>
                </button>
                <div className="product-image">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="product-details">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="size-selected">Tamanho: <span className="size-selected-item">{selectedSize}</span></p>
                    <div className="product-sizes">
                        <ul>
                            {availableSizes.map(size => (
                                <li
                                    key={size}
                                    className={selectedSize === size ? 'available-size selected' : 'available-size'}
                                    onClick={() => setSelectedSize(size)}>
                                    {size}
                                </li>
                            ))}
                            {sizesUnavailable.map(size => (
                                <li className="available-size sizes-unavailable">
                                    <div className="unavailable-ico">
                                        <svg width="49" height="49" viewBox="0 0 45 47" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <line x1="44.3613" y1="0.345611" x2="0.361319" y2="46.3456"
                                                  stroke="#CECECE"/>
                                        </svg>
                                    </div>

                                    <span key={size}>{size}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="product-button">
                    <button className="add-to-cart-button" onClick={handleAddToCart}
                            disabled={!selectedSize}>Adicionar ao carrinho<CardIcon variant={2} color="white" width={12} height={12}/></button>
                </div>
            </div>
        </div>
    );
}

export default DialogProduto;
