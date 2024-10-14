import React from 'react';

const AnimatedLoader = () => {
  return (
    <svg width="2701" height="4021" viewBox="0 0 2701 4021" fill="none" xmlns="http://www.w3.org/2000/svg" 
    className="loader-animation w-full h-full object-contain">
      <defs>
        <mask id="mask" x="0" y="0" width="2701" height="4021">
          <rect x="0" y="0" width="2701" height="4021" fill="white" />
          <rect id="mask-rect" x="0" y="4021" width="2701" height="4021" fill="black" />
        </mask>
      </defs>
      <path d="M678.856 0H2005.71V770.959H678.856V0Z" fill="#F95560" stroke="#F95560" strokeWidth="2" mask="url(#mask)" />
      <path d="M2028.81 1619.88H2044.24V1601.52V807.673H2700V4020H2044.24V2413.84V2395.48H2028.81H1357.71V1619.88H2028.81Z" fill="#F95560" stroke="#F95560" strokeWidth="2" mask="url(#mask)" />
      <path d="M0 807.673H648V2404.66H0V807.673Z" fill="#F95560" stroke="#F95560" strokeWidth="2" mask="url(#mask)" />
      <path d="M0 3249.04H648V4020H0V3249.04Z" fill="#F95560" stroke="#F95560" strokeWidth="2" mask="url(#mask)" />
    </svg>
  );
};

export default AnimatedLoader;
