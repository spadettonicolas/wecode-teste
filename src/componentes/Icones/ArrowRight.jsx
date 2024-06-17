import React from 'react';

function ArrowRight({color = '#1D1D1D', width = 8, height = 8}) {
    return (
        <svg width={width} height={height} viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="angulo-direito 1" clipPath="url(#clip0_0_665)">
                <path id="Vector"
                      d="M2.47067 8.49995L2 8.02928L5.29367 4.73562C5.35616 4.67311 5.39126 4.58834 5.39126 4.49995C5.39126 4.41156 5.35616 4.32679 5.29367 4.26428L2.00567 0.976949L2.477 0.505615L5.76433 3.79295C5.9518 3.98048 6.05712 4.23478 6.05712 4.49995C6.05712 4.76511 5.9518 5.01942 5.76433 5.20695L2.47067 8.49995Z"
                      fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_0_665">
                    <rect width="8" height="8" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
        </svg>


    );
}

export default ArrowRight;
