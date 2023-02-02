import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/ImageFinder/imagefinder.module.css';

export default function ImageGalleryItem({ items, showImage }) {
  return (
    <ul className={css.ImageGallery}>
      {items.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li
          onClick={() => showImage({ largeImageURL })}
          key={id}
          className={css.ImageGalleryItem}
        >
          <img
            src={webformatURL}
            alt={tags}
            className={css.ImageGalleryItemImage}
          />
        </li>
      ))}
    </ul>
  );
}

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  showImage: PropTypes.func.isRequired,
};
