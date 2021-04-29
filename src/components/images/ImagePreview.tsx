import React, { ChangeEvent, useEffect } from 'react';

interface ImageElementProps {
  id: string;
  name?: string;
  label?: string;
  onChange: (key: string, buffer: any) => void;
  className?: string;
  default_text?: string;
  updateMode?: boolean;
  setRef?: (v: any) => any;
  value?: string;
}

// Globals
export const ImagePreview = ({
  id,
  name,
  value,
  className = '',
  setRef,
  onChange = () => {},
  default_text = 'Add an Image',
}: ImageElementProps) => {
  const keyId = id || 'image';
  const keyName = name || keyId;

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    const file = e.target.files[0];
    if (file) previewPhoto(file);
  };

  const previewPhoto = (file: File | any) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result;
      onChange(keyName, src);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={`image-preview ${className}`}>
      {!value && (
        <label htmlFor={keyId} className="empty-placeholder">
          <h5 className="text1">{default_text}</h5>
          <span className="text2">tap or click</span>
        </label>
      )}
      <input
        type="file"
        accept="image/x-png,image/jpg,image/jpeg,image/png"
        id={keyId}
        name={keyName}
        onChange={onFileChange}
      />

      <img ref={setRef} src={value} alt={keyId} />
    </div>
  );
};
