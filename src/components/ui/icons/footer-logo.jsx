import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

function FooterLogo() {
    const {theme} = useTheme()
  const circleRef = useRef(null);

  return (
    <svg
    width="95"
    height="118"
    viewBox="0 0 95 118"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-full"
  >
    <defs>
        {/* Define the radial gradient for the mask */}
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientUnits="objectBoundingBox">
        <stop offset="0%" stopColor={"white"} stopOpacity="1" />  {/* Opaque at the center */}
        <stop offset="100%" stopColor={"white"} stopOpacity="0" /> {/* Transparent at the edges */}
        </radialGradient>

        {/* Define the mask with the gradient */}
        <mask id="fade" maskUnits="objectBoundingBox">
        <rect width="200%" height="200%" fill="url(#grad1)" className=''>
          <animate attributeName="x" values="-50%; 0; 50%; 0; -50%" dur="10s" repeatCount="indefinite" />
          <animate attributeName="y" values="-50%; 0; 50%; 0; -50%" dur="12s" repeatCount="indefinite" />
          <animate attributeName="width" values="300%; 100%; 200%; 100%; 300%" dur="5s" repeatCount="indefinite" />
          <animate attributeName="height" values="300%; 100%; 200%; 100%; 300%" dur="6s" repeatCount="indefinite" />
        </rect>
        </mask>
    </defs>

    <g fillOpacity={"0.1"}>
      <path d="M70.6609 0H23.5547V23.4782H70.6609V0Z" fill={theme=='light'?"black":"white"} />
      <path d="M70.658 23.4802V46.9584H47.1062V70.4393H70.658V117.398H94.2125V23.4802H70.658Z" fill={theme=='light'?"black":"white"} />
      <path d="M23.5518 23.4802H0V70.4393H23.5518V23.4802Z" fill={theme=='light'?"black":"white"} />
      <path d="M23.5518 93.9182H0V117.396H23.5518V93.9182Z" fill={theme=='light'?"black":"white"} />
    </g>
    {/* Apply the mask to the paths */}
    <g mask="url(#fade)" fillOpacity={theme == 'light' ? "0.5" : "0.5"}>
      <path d="M70.6609 0H23.5547V23.4782H70.6609V0Z" fill={theme=='light'?"black":"white"} />
      <path d="M70.658 23.4802V46.9584H47.1062V70.4393H70.658V117.398H94.2125V23.4802H70.658Z" fill={theme=='light'?"black":"white"} />
      <path d="M23.5518 23.4802H0V70.4393H23.5518V23.4802Z" fill={theme=='light'?"black":"white"} />
      <path d="M23.5518 93.9182H0V117.396H23.5518V93.9182Z" fill={theme=='light'?"black":"white"} />
    </g>
  </svg>
  );
}

export default FooterLogo;
