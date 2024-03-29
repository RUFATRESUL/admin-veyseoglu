import * as React from "react";
const SvgKey = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#E34935"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.167 7.5c0-.427-.163-.853-.489-1.179a1.661 1.661 0 0 0-1.178-.488m0 6.667a5 5 0 1 0-4.955-4.327c.048.361.073.542.056.657a.71.71 0 0 1-.097.288c-.056.101-.156.2-.355.4l-4.258 4.258c-.145.144-.217.216-.268.3a.834.834 0 0 0-.1.241c-.023.096-.023.198-.023.402v1.448c0 .466 0 .7.09.878.08.157.208.284.365.364.178.091.412.091.878.091h2v-1.667H7.5v-1.666h1.667l1.316-1.316c.198-.2.298-.299.399-.355a.709.709 0 0 1 .288-.097c.115-.017.296.008.658.056.22.03.444.045.672.045Z"
    />
  </svg>
);
export default SvgKey;
