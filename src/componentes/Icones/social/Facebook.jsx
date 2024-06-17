import React from 'react';

function Facebook({color = '#FFE9DC', width = 25, height = 25}) {
    return (
        <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="facebook" clipPath="url(#clip0_0_406)">
                <g id="Group">
                    <path id="Vector"
                          d="M24.5 12.4517C24.5 18.4407 20.106 23.4057 14.37 24.3067V15.9437H17.159L17.69 12.4837H14.37V10.2387C14.37 9.29166 14.834 8.36966 16.32 8.36966H17.829V5.42366C17.829 5.42366 16.459 5.18966 15.15 5.18966C12.416 5.18966 10.63 6.84666 10.63 9.84566V12.4827H7.591V15.9427H10.63V24.3057C4.895 23.4037 0.5 18.4397 0.5 12.4517C0.5 5.82466 5.873 0.45166 12.5 0.45166C19.127 0.45166 24.5 5.82366 24.5 12.4517Z"
                          fill={color}/>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_0_406">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.378662)"/>
                </clipPath>
            </defs>
        </svg>


    );
}

export default Facebook;
