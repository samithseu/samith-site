const ReactLogo = () => {
  return (
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="40"
      height="40"
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="text-sm me-0 w-10 h-10 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out"
    >
      <circle cx="0" cy="0" r="2"></circle>
      <g stroke-width="1" fill="none">
        <ellipse rx="10" ry="4.5" fill="none"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)" fill="none"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)" fill="none"></ellipse>
      </g>
    </svg>
  );
};

export default ReactLogo;
