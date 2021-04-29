import React from 'react';

interface Props {
  label?: string;
  value?: string | number;
  onChange?: (val: any) => void;
}

export const RangedInput = ({ label, value, onChange }: Props) => {
  const decimal = parseInt(`${value || 0}`);
  const leftOffset = -1.2 + decimal * 0.03;
  return (
    <div className="ranged-input">
      <input
        min="0"
        max="100"
        step="1"
        type="range"
        value={value}
        onChange={onChange}
      />
      <style jsx>
        {`
          .ranged-input input[type="range"]::-webkit-slider-thumb {
            left: ${leftOffset}rem;
          }
        `}
      </style>

      <div className="slider-progress">
        <div style={{ width: `${value}%` }} className="slider-bar">
          <div className="slider-thumb" />
          {label && <span className="slider-value">{label}</span>}
        </div>
      </div>
    </div>
  );
};