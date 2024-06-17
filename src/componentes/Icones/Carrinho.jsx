import React from 'react';

function Carrinho({ color = 'black', width = 25, height = 14 }) {
    return (
        <svg width={width} height={height} viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_1773)">
        <path d="M10.5 3.49976C10.5 2.5715 10.1313 1.68126 9.47487 1.02488C8.8185 0.368505 7.92826 -0.000244141 7 -0.000244141C6.07174 -0.000244141 5.1815 0.368505 4.52513 1.02488C3.86875 1.68126 3.5 2.5715 3.5 3.49976H0V12.2498C0 12.7139 0.184374 13.159 0.512563 13.4872C0.840752 13.8154 1.28587 13.9998 1.75 13.9998H12.25C12.7141 13.9998 13.1592 13.8154 13.4874 13.4872C13.8156 13.159 14 12.7139 14 12.2498V3.49976H10.5ZM7 1.16642C7.61884 1.16642 8.21233 1.41226 8.64992 1.84984C9.0875 2.28742 9.33333 2.88092 9.33333 3.49976H4.66667C4.66667 2.88092 4.9125 2.28742 5.35008 1.84984C5.78767 1.41226 6.38116 1.16642 7 1.16642ZM12.8333 12.2498C12.8333 12.4045 12.7719 12.5528 12.6625 12.6622C12.5531 12.7716 12.4047 12.8331 12.25 12.8331H1.75C1.59529 12.8331 1.44692 12.7716 1.33752 12.6622C1.22812 12.5528 1.16667 12.4045 1.16667 12.2498V4.66642H3.5V5.83309H4.66667V4.66642H9.33333V5.83309H10.5V4.66642H12.8333V12.2498Z" fill={color}/>
        </g>
        <path d="M22.21 6.92065C22.21 7.50008 22.166 8.01766 22.0781 8.47339C21.9902 8.92912 21.8519 9.31486 21.6631 9.63062C21.4743 9.94637 21.2301 10.1873 20.9307 10.3533C20.6312 10.516 20.2715 10.5974 19.8516 10.5974C19.321 10.5974 18.8815 10.4526 18.5332 10.1628C18.1882 9.87313 17.9294 9.45483 17.7568 8.90796C17.5876 8.35783 17.5029 7.69539 17.5029 6.92065C17.5029 6.15894 17.5794 5.50464 17.7324 4.95776C17.8887 4.40763 18.1393 3.98608 18.4844 3.69312C18.8294 3.39689 19.2852 3.24878 19.8516 3.24878C20.3887 3.24878 20.8314 3.39526 21.1797 3.68823C21.528 3.97795 21.7868 4.39787 21.9561 4.948C22.1253 5.49487 22.21 6.15243 22.21 6.92065ZM18.3184 6.92065C18.3184 7.58472 18.3688 8.1381 18.4697 8.58081C18.5706 9.02352 18.7334 9.35555 18.958 9.5769C19.1859 9.795 19.4837 9.90405 19.8516 9.90405C20.2194 9.90405 20.5156 9.795 20.7402 9.5769C20.9681 9.35881 21.1325 9.0284 21.2334 8.58569C21.3376 8.14299 21.3896 7.58797 21.3896 6.92065C21.3896 6.26636 21.3392 5.71948 21.2383 5.28003C21.1374 4.83732 20.9746 4.50529 20.75 4.28394C20.5254 4.05933 20.2259 3.94702 19.8516 3.94702C19.4772 3.94702 19.1777 4.05933 18.9531 4.28394C18.7285 4.50529 18.5658 4.83732 18.4648 5.28003C18.3672 5.71948 18.3184 6.26636 18.3184 6.92065Z" fill='none'/>
        <defs>
        <clipPath id="clip0_1_1773">
        <rect width={width} height={height} fill={color} transform="translate(0 -0.000244141)"/>
        </clipPath>
        </defs>
        </svg>        
    )
}

export default Carrinho;