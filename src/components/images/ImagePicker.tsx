import React, { useState } from 'react';
import Cropper from 'cropperjs';

// '/public/vendor/cropper.min.js';
// '/public/vendor/cropper.min.css';
import { FiCamera } from 'react-icons/fi';
import { ImagePreview } from './ImagePreview';
import { useScripts } from '@/hooks/useScripts';
import { Modal } from '../modals';

interface Props {
  aspectRatio?: number;
  maxWidth?: number;
  maxHeight?: number;

  format?: 'base64' | 'blob';

  show: boolean;
  setShow: (v: any) => void;
  onSubmit?: (value: Blob | string) => void;
}

let cropper: Cropper | null = null;
export const ImagePicker = ({
  aspectRatio,
  maxWidth,
  maxHeight,
  format = 'blob',
  show,
  setShow,
  onSubmit = () => {},
}: Props) => {
  const { loaded } = useScripts([
    { type: 'script', url: '/vendor/cropper.min.js' },
    { type: 'style', url: '/vendor/cropper.min.css' }
  ])

  const [arrayBuffer, setArrayBuffer] = useState<any>();
  const [imageRef, setImageRef] = useState<HTMLImageElement>();

  const hiddenClass = show ? '' : 'delay-hide';
  const closeModal = () => {
    cropper?.destroy();
    cropper = null;
    setArrayBuffer('');
    setShow(false);
  };

  const handleSubmit = () => {
    if (!arrayBuffer) return;
    if (!cropper) return;

    const canvas = cropper.getCroppedCanvas({
      maxWidth: maxWidth || 900,
      maxHeight: maxHeight || 900,
      fillColor: '#fff',
    });

    if (canvas == null) {
      console.error('Not an image file');
      return;
    }

    if (format === 'base64') {
      const base64 = canvas.toDataURL('image/jpeg');
      onSubmit(base64);
      closeModal();
      return;
    }

    if (format === 'blob') {
      canvas.toBlob((blob) => {
        onSubmit(blob!);
        closeModal();
      });
    }
  };

  const cropPhoto = () => {
    cropper?.destroy();
    cropper = null;

    cropper = new Cropper(imageRef!, {
      ...{ aspectRatio },
      background: false,
      crop(_event) {
        // event properties
      },
    });
  };

  const onChange = (_: any, buffer: any) => {
    setArrayBuffer(buffer);
    cropPhoto();
  };

  if(!loaded) return <div></div>;

  return (
    <Modal
      show={show}
      title="Change Avatar"
      onClose={closeModal}
      className="modal-upload-image"
    >
      <div className="upload-image">
        <ImagePreview
          id="filePhoto"
          onChange={onChange}
          setRef={setImageRef}
          value={arrayBuffer}
        />
      </div>

      <div className={`upload-actions ${hiddenClass}`}>
        <button type="button" onClick={closeModal} className="btn btn-outline">
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary-outline"
        >
          Update
        </button>
      </div>
    </Modal>
  );
};

interface OverlayProps {
  openModal: () => void;
}
ImagePicker.Overlay = ({ openModal }: OverlayProps) => {
  return (
    <div className="modal-image-overlay" onClick={openModal}>
      <FiCamera />
    </div>
  );
};
