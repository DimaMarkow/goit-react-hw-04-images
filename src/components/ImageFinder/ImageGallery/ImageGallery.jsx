import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from 'shared/Modal/Modal';
import ImageGalleryItem from 'components/ImageFinder/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/ImageFinder/Loader/Loader';
import Button from 'components/ImageFinder/Button/Button';
import { searchPosts } from 'shared/services/posts-api';

const ImageGallery = ({ filter }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [imageDetail, setImageDetail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setImages([]);
    setQuery(filter);
    setPage(1);
  }, [filter]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);
    searchPosts(query, page)
      .then(data => {
        console.log(data);
        setImages(prevImages => [...prevImages, ...data.hits]);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  const loadMore = () => {
    setPage(page => page + 1);
  };

  const showImage = ({ largeImageURL }) => {
    setImageDetail(largeImageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setImageDetail(null);
    setShowModal(false);
  };

  return (
    <>
      {error && <h2>{error.message}</h2>}
      {loading && <Loader />}
      {images.length > 0 && (
        <ImageGalleryItem items={images} showImage={showImage} />
      )}
      {Boolean(images.length) && <Button onLoadMore={loadMore} />}
      {showModal && <Modal imageDetail={imageDetail} closeModal={closeModal} />}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  filter: PropTypes.string.isRequired,
};
