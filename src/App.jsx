import React, {useState} from 'react';
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './componentes/Header/Header'
import MenuLateral from './componentes/Menu/MenuLateral/MenuLateral';
import Carrinho from './componentes/Carrinho/Carrinho/Carrinho';
import BannerPrincipal from './componentes/BannerPrincipal/BannerPrincipal';
import BannerCategorias from './componentes/BannerCategorias/BannerCategorias';
import BannerNavegacao from './componentes/BannerNavegacao/BannerNavegacao';
import CardProdutos from './componentes/CardProdutos/CardProdutos';
import TeceiroBanner from './componentes/TeceiroBanner/TeceiroBanner';
import Noticia from './componentes/Noticia/Noticia';
import Footer from './componentes/Footer/Footer';


function App() {

  const [menuLateralAberto, setMenuLateralAberto] = useState(false);
  const [carrinhoAberto, serCarrinhiAberto] = useState(false);
  const [cart, setCart] = useState([]);

  function abreMenuLateral(){
    setMenuLateralAberto(true);
  }

  function fechaMenuLateral(){
    setMenuLateralAberto(false);
  }
  function abreCarrinho(){
    serCarrinhiAberto(true);
}

function fechaCarrinho(){
    serCarrinhiAberto(false);
}

function addToCart(product, size) {
    setCart(prevCart => {
        const existingItemIndex = prevCart.findIndex(item => item.id === product.id && item.size === size);

        if (existingItemIndex >= 0) {
            const updatedCart = [...prevCart];
            updatedCart[existingItemIndex].quantity += 1;
            return updatedCart;
        }

        return [...prevCart, { ...product, size, quantity: 1 }];
    });
    abreCarrinho();
}

function increaseQuantity(itemId, itemSize) {
    setCart(prevCart => {
        return prevCart.map(item => {
            if (item.id === itemId && item.size === itemSize) {
                return {...item, quantity: item.quantity + 1};
            }
            return item;
        });
    });
}

function decreaseQuantity(itemId, itemSize) {
    setCart(prevCart => {
        return prevCart.map(item => {
            if (item.id === itemId && item.size === itemSize && item.quantity > 1) {
                return {...item, quantity: item.quantity - 1};
            }
            return item;
        });
    });
}

function removeFromCart(itemId, itemSize) {
    setCart(prevCart => prevCart.filter(item => !(item.id === itemId && item.size === itemSize)));
}

  return (
    <div>  
      <Header onOpenMenu={abreMenuLateral} itemsBag={cart.length} onOpenCard={abreCarrinho}/>
      <MenuLateral isOpen={menuLateralAberto} onClose={fechaMenuLateral}></MenuLateral>
      <Carrinho isOpen={carrinhoAberto} onClose={fechaCarrinho} products={cart}  onDecrease={decreaseQuantity} onIncrease={increaseQuantity} onRemove={removeFromCart}/>
      <BannerPrincipal/>
      <BannerCategorias/>    
      <BannerNavegacao/>
      <CardProdutos addToCart={addToCart}/>
      <TeceiroBanner/>
      <Noticia/>
      <Footer/>
    
    </div>
  );
}


export default App;
