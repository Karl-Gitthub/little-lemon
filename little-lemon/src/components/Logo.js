function Logo({ className = '', variant = 'default' }) {
  const fill = variant === 'footer' ? '#495E57' : '#F4CE14';
  const leafFill = variant === 'footer' ? '#F4CE14' : '#495E57';

  return (
    <svg
      className={className}
      viewBox="0 0 200 40"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Little Lemon"
    >
      <circle cx="20" cy="20" r="18" fill={leafFill} />
      <ellipse cx="20" cy="22" rx="8" ry="12" fill={fill} transform="rotate(-15 20 22)" />
      <text
        x="46"
        y="28"
        fontFamily="Markazi Text, serif"
        fontSize="28"
        fontWeight="500"
        fill={variant === 'footer' ? '#495E57' : '#333333'}
      >
        Little Lemon
      </text>
    </svg>
  );
}

export default Logo;
