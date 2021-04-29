import React from 'react';

type TextTypes = 
  | 'text'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'time'
  | 'url'
  | 'email';

type ChangeHandler = 
| ((value: string, key: string) => void)
| ((value: string, key?: string) => void);

interface TextElementProps {
  id: string;
  name?: string;
  label?: string;
  type?: TextTypes;
  value?: string;
  onChange?: ChangeHandler;

  className?: string;
  maxLength?: number;
  placeholder?: string;
  prefix?: string;
  showLabel?: 'always' | 'hover';
  autoComplete?: 'off' | 'on';
}

export const TextInput = ({
  id,
  name,
  label,
  type= 'text',
  value = '',
  className = '',
  maxLength = 500,
  placeholder = 'Text goes here',
  onChange = (value: string) => {},
  prefix,
  showLabel = 'hover',
  autoComplete
}: TextElementProps) => {
  const keyId =  id;
  const keyName = name || keyId;

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(value, name);
  };

  const showLabels = () => {
    return (
      <React.Fragment>
      {label && (
        <label htmlFor={keyId} className={`text-label ${showLabel}`}>
          {label}
        </label>
      )}
      {prefix && <span className='text-prefix'>{prefix}</span>}
      </React.Fragment>
    )
  }


  return (
    <div className={`text-input ${className}`}>
      {showLabels()}
      <input
        type={type}
        placeholder={placeholder}
        id={keyId}
        name={keyName}
        onChange={handleTextInput}
        maxLength={maxLength}
        value={value}
        spellCheck={false}
        autoComplete={autoComplete || 'on'}
      />
    </div>
  );
};
