import React from 'react';

function Tiktok({color = '#FFE9DC', width = 24, height = 24}) {
    return (
        <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="tik-tok" clipPath="url(#clip0_0_414)">
                <path id="Vector"
                      d="M22.965 10.2447C20.826 10.2447 18.843 9.56066 17.225 8.39866V16.7837C17.225 20.9717 13.818 24.3777 9.63099 24.3777C8.01299 24.3777 6.51199 23.8677 5.27899 23.0017C3.32099 21.6267 2.03699 19.3527 2.03699 16.7837C2.03699 12.5957 5.44399 9.18866 9.63199 9.18866C9.97999 9.18866 10.32 9.21766 10.655 9.26266V10.2397V13.4747C10.331 13.3737 9.98899 13.3147 9.63199 13.3147C7.71999 13.3147 6.16399 14.8707 6.16399 16.7837C6.16399 18.1157 6.91999 19.2727 8.02399 19.8537C8.50499 20.1067 9.05199 20.2517 9.63299 20.2517C11.501 20.2517 13.025 18.7657 13.095 16.9137L13.098 0.378662H17.224C17.224 0.736662 17.259 1.08566 17.321 1.42566C17.612 2.99766 18.545 4.34666 19.838 5.18966C20.738 5.77666 21.812 6.11966 22.964 6.11966L22.965 10.2447Z"
                      fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_0_414">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.378662)"/>
                </clipPath>
            </defs>
        </svg>


    );
}

export default Tiktok;
