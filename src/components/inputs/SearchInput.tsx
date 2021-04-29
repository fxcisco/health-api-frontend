import React, { useEffect, useRef, useState } from 'react';

interface Props {
  id: string;
  name?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  prefix?: string;
  showLabel?: 'always' | 'hover';
  isLoading?: boolean;
  onSubmit?: (value: string) => any;
}


export const SearchInput = ({
  id,
  name,
  label,
  className = '',
  placeholder = 'Search text',
  prefix,
  showLabel = 'hover',
  isLoading,
  onSubmit = () => {},
}: Props) => {
  const keyId = id;
  const keyName = name || keyId;
  const [searchText, setSearchText] = useState('')
  const timer = useRef<any>();


  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, [])


  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchText(value);
    clearTimeout(timer.current);
    if(value.trim() !== ''){
      timer.current = setTimeout(() => {
        onSubmit(value);
      }, 1000);
    }
  };

  const showLabels = () => {
    return (
      <React.Fragment>
        {label && (
          <label htmlFor={keyId} className={`text-label ${showLabel}`}>
            {label}
          </label>
        )}
        {prefix && <span className="text-prefix">{prefix}</span>}
      </React.Fragment>
    );
  };


  return (
    <div className={`search-input ${className}`}>
      {showLabels()}
      <input
        type='search'
        placeholder={placeholder}
        id={keyId}
        name={keyName}
        onChange={handleTextInput}
        value={searchText}
        spellCheck={false}
      />
      {isLoading && (
        <div className="loading-icon">
          <div className="lds-dual-ring" />
        </div>
      )}
    </div>
  );
};
