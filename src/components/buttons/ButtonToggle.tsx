import React from 'react';

interface Props {
  show?: boolean;
  onClick?: () => void;
}

export const ButtonToggle = ({ show, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`btn-toggle ${show ? 'active' : ''}`}
    />
  );
};
