import React, { useEffect, useState } from 'react';
import './Gallery.sass';
import { getImages } from '../../../../../../../api/api';
import { GalleryList } from './components/GalleryList';

export const Gallery = () => {
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestedImages = await getImages();

      setImagesList(requestedImages.hits);
    }

    fetchData();
  }, [])

  return (
    <div className="gallery">
      {console.log(imagesList)}

      {imagesList.length !== 0 && (
        <GalleryList list={imagesList} />
      )}

    </div>
  );
}