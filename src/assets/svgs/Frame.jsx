import * as React from "react";
const SvgFrame = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#Frame_svg__a)">
      <path
        fill="currentColor"
        d="M2.5 18.125h1.25V20H2.5A2.502 2.502 0 0 1 0 17.5v-15C0 1.121 1.121 0 2.5 0h6.465c.664 0 1.3.262 1.77.73l3.535 3.536a2.5 2.5 0 0 1 .73 1.77v5.214h-1.875v-5H10c-.691 0-1.25-.559-1.25-1.25V1.875H2.5a.627.627 0 0 0-.625.625v15c0 .344.281.625.625.625Zm4.375-4.375h1.25a2.189 2.189 0 0 1 0 4.375H7.5v1.25a.627.627 0 0 1-.625.625.627.627 0 0 1-.625-.625v-5c0-.344.281-.625.625-.625Zm1.25 3.125c.52 0 .938-.418.938-.938A.935.935 0 0 0 8.124 15H7.5v1.875h.625Zm3.75-3.125h1.25c1.035 0 1.875.84 1.875 1.875v2.5C15 19.16 14.16 20 13.125 20h-1.25a.627.627 0 0 1-.625-.625v-5c0-.344.281-.625.625-.625Zm1.25 5a.627.627 0 0 0 .625-.625v-2.5a.627.627 0 0 0-.625-.625H12.5v3.75h.625Zm3.125-4.375c0-.344.281-.625.625-.625h1.875c.344 0 .625.281.625.625a.627.627 0 0 1-.625.625H17.5v1.25h1.25c.344 0 .625.281.625.625a.627.627 0 0 1-.625.625H17.5v1.875a.627.627 0 0 1-.625.625.627.627 0 0 1-.625-.625v-5Z"
      />
    </g>
    <defs>
      <clipPath id="Frame_svg__a">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFrame;
