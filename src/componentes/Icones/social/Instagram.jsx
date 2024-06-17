import React from 'react';

function Instagram({color = '#FFE9DC', width = 24, height = 24}) {
    return (
        <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="instagram" clipPath="url(#clip0_0_401)">
                <g id="Group">
                    <path id="Vector"
                          d="M12.5 2.54066C15.704 2.54066 16.084 2.55266 17.349 2.61066C18.657 2.67066 20.004 2.96866 20.957 3.92166C21.919 4.88366 22.208 6.21766 22.268 7.52966C22.326 8.79466 22.338 9.17466 22.338 12.3787C22.338 15.5827 22.326 15.9627 22.268 17.2277C22.209 18.5287 21.904 19.8887 20.957 20.8357C19.995 21.7977 18.662 22.0867 17.349 22.1467C16.084 22.2047 15.704 22.2167 12.5 22.2167C9.296 22.2167 8.916 22.2047 7.651 22.1467C6.36 22.0877 4.982 21.7757 4.043 20.8357C3.086 19.8787 2.792 18.5317 2.732 17.2277C2.674 15.9627 2.662 15.5827 2.662 12.3787C2.662 9.17466 2.674 8.79466 2.732 7.52966C2.791 6.23366 3.099 4.86566 4.043 3.92166C5.003 2.96166 6.342 2.67066 7.651 2.61066C8.916 2.55266 9.296 2.54066 12.5 2.54066ZM12.5 0.378662C9.241 0.378662 8.832 0.392662 7.552 0.450662C5.697 0.535662 3.855 1.05166 2.514 2.39266C1.168 3.73866 0.657 5.57666 0.572 7.43066C0.514 8.71066 0.5 9.11966 0.5 12.3787C0.5 15.6377 0.514 16.0467 0.572 17.3267C0.657 19.1797 1.175 21.0267 2.514 22.3647C3.859 23.7097 5.7 24.2217 7.552 24.3067C8.832 24.3647 9.241 24.3787 12.5 24.3787C15.759 24.3787 16.168 24.3647 17.448 24.3067C19.302 24.2217 21.146 23.7047 22.486 22.3647C23.833 21.0177 24.343 19.1807 24.428 17.3267C24.486 16.0467 24.5 15.6377 24.5 12.3787C24.5 9.11966 24.486 8.71066 24.428 7.43066C24.343 5.57566 23.826 3.73266 22.486 2.39266C21.143 1.04966 19.297 0.534662 17.448 0.450662C16.168 0.392662 15.759 0.378662 12.5 0.378662Z"
                          fill={color}/>
                    <path id="Vector_2"
                          d="M12.5 6.21667C9.09701 6.21667 6.33801 8.97568 6.33801 12.3787C6.33801 15.7817 9.09701 18.5407 12.5 18.5407C15.903 18.5407 18.662 15.7817 18.662 12.3787C18.662 8.97568 15.903 6.21667 12.5 6.21667ZM12.5 16.3787C10.291 16.3787 8.50001 14.5877 8.50001 12.3787C8.50001 10.1697 10.291 8.37868 12.5 8.37868C14.709 8.37868 16.5 10.1697 16.5 12.3787C16.5 14.5877 14.709 16.3787 12.5 16.3787Z"
                          fill={color}/>
                    <path id="Vector_3"
                          d="M18.906 7.41271C19.7013 7.41271 20.346 6.768 20.346 5.97271C20.346 5.17742 19.7013 4.53271 18.906 4.53271C18.1107 4.53271 17.466 5.17742 17.466 5.97271C17.466 6.768 18.1107 7.41271 18.906 7.41271Z"
                          fill={color}/>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_0_401">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.378662)"/>
                </clipPath>
            </defs>
        </svg>
    );
}

export default Instagram;
