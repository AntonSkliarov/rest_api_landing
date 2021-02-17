import React from 'react';
import PropTypes from 'prop-types';
import './GalleryItem.sass';

export const GalleryItem = ({ image }) => {
  return (
    <li className="gallery-item">
      <button class="gallery-item__close">&times;</button>
      <img className="gallery-item__image" src={image.previewURL} alt="Cat" />
    </li>
  );
}

GalleryItem.propTypes = {
  image: PropTypes.shape({
    previewURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  })
};
