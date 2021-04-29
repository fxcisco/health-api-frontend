import React from 'react';
import Image from 'next/image';

interface Props {
  alt?: string;
  fallback?: string;
  className?: string;
  src: string;
  width?: number;
  height?: number;
}

export const ImageNext = ({
  alt,
  src,
  fallback,
  className,
  width,
  height,
}: Props) => {
  const handleFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // e.currentTarget.src = fallback || '';
  };

  let imgProps: any = { layout: 'fill' };
  if(width && height) {
    imgProps = { width, height };
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={handleFallback}
      { ...imgProps }
    />
  );
};