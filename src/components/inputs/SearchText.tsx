import React, { useEffect, useRef, useState } from 'react';

interface Props {
  id: string;
  textRef?: any;
  value: string;
  className?: string;
  placeholder?: string;
  onChange: (key: any, value: string) => void;
  onSubmit?: (value: string) => any;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchText = ({
  id,
  textRef,
  className = '',
  placeholder = 'Search text',
  onSubmit = () => {},
  value,
  onChange,
  onKeyDown,
}: Props) => {
  const keyId = id;
  const timer = useRef<any>();

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    onChange(id, value);
    clearTimeout(timer.current);

    if (value.trim() !== '') {
      timer.current = setTimeout(() => {
        onSubmit(value);
      }, 1000);
    }
  };



  return (
    <input
      id={keyId}
      type="search"
      ref={textRef}
      className={className}
      placeholder={placeholder}
      onChange={handleTextInput}
      onKeyDown={onKeyDown}
      value={value}
      spellCheck={false}
    />
  );
};
