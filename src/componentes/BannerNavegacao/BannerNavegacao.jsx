import React from "react";
import'./BannerNavegacao.scss'

function BannerNavegacao(){
return(
    <div className="banner-navegacao">
        <div >
            <img className="banner-pequeno" src="/static/images/banner-navegacao/banner-pequeno.svg"/>
        </div>
        <div> 
         <img className="banner-grande"src="/static/images/banner-navegacao/banner-grande.svg"/>
        </div>
    </div>
)
}
export default BannerNavegacao;