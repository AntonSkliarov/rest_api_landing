import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './GalleryItem.sass';

export const GalleryItem = ({ image }) => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.style.display = 'block';
  }

  const closeModal = () => {
    modalRef.current.style.display = 'none';
  }

  return (
    <li className="gallery-item">
      <img
        className="gallery-item__image-preview"
        src={image.previewURL} alt="Cat"
        onClick={openModal}
      />

      <div ref={modalRef} className="gallery-item__modal">
        <button
          class="gallery-item__close"
          onClick={closeModal}
        >
          &times;
        </button>

        <img className="gallery-item__image" src={image.largeImageURL} alt="Cat" />
      </div>
    </li>
  );
}

GalleryItem.propTypes = {
  image: PropTypes.shape({
    previewURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  })
};
