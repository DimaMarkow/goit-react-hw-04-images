import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from 'components/ImageFinder/imagefinder.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ imageDetail, closeModal }) => {
  useEffect(() => {
    document.addEventListener('keydown', closeModalOnClick);
    return () => {
      document.removeEventListener('keydown', closeModalOnClick);
    };
  }, []);

  const closeModalOnClick = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      closeModal();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={closeModalOnClick}>
      <div className={css.Modal}>
        <img src={imageDetail} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  imageDetail: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
