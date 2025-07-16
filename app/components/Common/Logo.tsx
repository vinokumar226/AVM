'use client';

import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 204,
  height = 47,
  style,
  className,
}) => {
  return (
    <Image
      src="/avm-logo.png"
      alt="AVM Logo"
      width={width}
      height={height}
      style={style}
      className={className}
      priority
    />
  );
};

export default Logo;
