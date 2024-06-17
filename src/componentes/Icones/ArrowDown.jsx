import React from 'react';

function ArrowDown({color = '#1D1D1D', width = 8, height = 8}) {
    return (
        <svg width={width} height={height} viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" fillRule="evenodd" clipRule="evenodd"
                  d="M5.49999 6L-2.78225e-08 0.636504L0.652699 -4.52295e-07L5.49999 4.727L10.3473 -2.85307e-08L11 0.636505L5.49999 6Z"
                  fill={color}/>
        </svg>


    );
}

export default ArrowDown;
