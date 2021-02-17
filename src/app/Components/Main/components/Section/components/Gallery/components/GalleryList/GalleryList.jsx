import React from 'react';
import PropTypes from 'prop-types';
import './GalleryList.sass';
import { GalleryItem } from './components/GalleryItem';

export const GalleryList = ({ list }) => {
  return (
    <ul className="gallery-list">
      {list.map(image => (
        <GalleryItem image={image} key={image.previewURL}/>
      ))}
    </ul>
  );
}

GalleryList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      previewURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  )
};