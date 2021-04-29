import React, { useEffect, useRef } from 'react';



type ChangeHandler = 
| ((value: string, key: string) => void)
| ((value: string, key?: string) => void);

interface TextElementProps {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  className?: string;
  maxLength?: number;
  placeholder?: string;
  onChange?: ChangeHandler;
  onKeyDown?: (e: any) => void;
}

export const TextareaInput = ({
  id,
  name,
  label,
  value = '',
  className = '',
  maxLength = 500,
  placeholder = 'Text goes here',
  onChange = (value: string) => {},
  onKeyDown
}: TextElementProps) => {
  const textRef = useRef<HTMLTextAreaElement>();
  const keyId =  id || 'value';
  const keyName = name || keyId;

  const setInitialHeight = (target: HTMLTextAreaElement) => {
    if (!target) return;
    textRef.current = target;
    resizeArea();
  };

  const resizeArea = () => {
    if(!textRef.current) return;

    textRef.current.style.height = '1px';
    const scrollHeight = +textRef.current.scrollHeight ;
    textRef.current.style.height = (scrollHeight) + 'px';
    textRef.current.style.overflowY = 'hidden';
  }

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange(value, name);
    resizeArea();
  };

  const showLabel = () => {
    return label && (
      <label htmlFor={keyId} className='text-label'>
        {label}
      </label>
    )
  }

  return (
    <div className={`textarea-input ${className}`}>
      {showLabel()}
      <textarea
        placeholder={placeholder}
        id={keyId}
        name={keyName}
        onChange={handleTextInput}
        ref={setInitialHeight}
        maxLength={maxLength}
        value={value}
        spellCheck={false}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
