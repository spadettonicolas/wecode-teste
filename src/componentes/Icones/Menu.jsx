import React from 'react';

function Menu({ color = 'black', width = 14, height = 14 }) {
    return (  
<svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1772)">
<path d="M14 6.41638H0V7.58305H14V6.41638Z" fill={color}/>
<path d="M14 2.33313H0V3.4998H14V2.33313Z" fill={color}/>
<path d="M14 10.4998H0V11.6664H14V10.4998Z" fill={color}/>
</g>
<defs>
<clipPath id="clip0_1_1772">
<rect width={width} height={height} fill={color} transform="translate(0 -0.000244141)"/>
</clipPath>
</defs>
</svg>
    )
}

export default Menu;