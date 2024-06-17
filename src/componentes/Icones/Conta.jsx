import React from 'react';

function Conta({ color = 'black', width = 14, height = 14 }) {
    return (
          <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1774)">
<path d="M12.25 13.9997H11.0833V11.058C11.0829 10.6006 10.901 10.1622 10.5776 9.83878C10.2542 9.51539 9.81575 9.33351 9.35842 9.33305H4.64158C4.18425 9.33351 3.74578 9.51539 3.42239 9.83878C3.09901 10.1622 2.91713 10.6006 2.91667 11.058V13.9997H1.75V11.058C1.75093 10.2914 2.05587 9.55641 2.59795 9.01433C3.14002 8.47225 3.87497 8.16731 4.64158 8.16638H9.35842C10.125 8.16731 10.86 8.47225 11.4021 9.01433C11.9441 9.55641 12.2491 10.2914 12.25 11.058V13.9997Z" fill={color}/>
<path d="M7 6.99976C6.30777 6.99976 5.63108 6.79449 5.05551 6.4099C4.47993 6.02532 4.03133 5.47869 3.76642 4.83915C3.50152 4.19961 3.4322 3.49588 3.56725 2.81694C3.7023 2.13801 4.03564 1.51437 4.52513 1.02488C5.01461 0.5354 5.63825 0.202057 6.31719 0.067009C6.99612 -0.0680393 7.69985 0.00127236 8.33939 0.266179C8.97893 0.531086 9.52556 0.97969 9.91014 1.55526C10.2947 2.13083 10.5 2.80752 10.5 3.49976C10.4991 4.42773 10.13 5.31743 9.47385 5.97361C8.81768 6.62979 7.92797 6.99883 7 6.99976ZM7 1.16642C6.53851 1.16642 6.08739 1.30327 5.70367 1.55966C5.31996 1.81605 5.02089 2.18047 4.84428 2.60683C4.66768 3.03319 4.62147 3.50235 4.7115 3.95497C4.80153 4.40759 5.02376 4.82335 5.35009 5.14967C5.67641 5.476 6.09217 5.69823 6.54479 5.78826C6.99741 5.87829 7.46657 5.83208 7.89293 5.65548C8.31929 5.47887 8.68371 5.1798 8.9401 4.79609C9.19649 4.41237 9.33333 3.96125 9.33333 3.49976C9.33333 2.88092 9.0875 2.28743 8.64992 1.84984C8.21233 1.41226 7.61884 1.16642 7 1.16642Z" fill={color}/>
</g>
<defs>
<clipPath id="clip0_1_1774">
<rect width={width} height={height} fill={color} transform="translate(0 -0.000244141)"/>
</clipPath>
</defs>
</svg>
    )
}

export default Conta;