import React, { ReactNode } from 'react';
import { BsX } from 'react-icons/bs';

interface Props {
  show?: boolean;
  title?: string;
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
}

export const Modal = ({
  show = false,
  title = '',
  className = '',
  onClose = () => {},
  children,
}: Props) => {

  const modalClass = show ? 'active' : '';
  const hiddenClass = show ? '': 'delay-hide';

  return (
    <React.Fragment>
      <div className={`modal-overlay ${modalClass}`} onClick={onClose}></div>
      <div className={`modal-wrapper ${modalClass}`}>
        <div className={`modal-container ${className}`}>
          <header className={`modal-header ${hiddenClass}`}>
            <h5 className='modal-title'>{title}</h5>
            <button
              className="btn-close-outline"
              aria-label='close'
              onClick={onClose}
            >
              <BsX aria-label='hidden' />
            </button>
          </header>

          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
