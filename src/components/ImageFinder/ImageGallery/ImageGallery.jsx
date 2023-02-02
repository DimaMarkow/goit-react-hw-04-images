import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'shared/Modal/Modal';
import ImageGalleryItem from 'components/ImageFinder/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/ImageFinder/Loader/Loader';
import Button from 'components/ImageFinder/Button/Button';
import { searchPosts } from 'shared/services/posts-api';

class ImageGallery extends React.Component {
  state = {
    images: [],
    loading: false,
    error: null,
    page: 1,
    imageDetail: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filter !== this.props.filter) {
      this.setState({ images: [], page: 1 });
    }
    if (
      prevProps.filter !== this.props.filter ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      searchPosts(this.props.filter, this.state.page)
        .then(data => {
          this.setState(({ images }) => ({
            images: [...images, ...data.hits],
          }));
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showImage = ({ largeImageURL }) => {
    this.setState({
      imageDetail: largeImageURL,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      imageDetail: null,
      showModal: false,
    });
  };

  render() {
    const { images, loading, error, showModal, imageDetail } = this.state;
    return (
      <>
        {error && <h2>{error.message}</h2>}
        {loading && <Loader />}
        {images.length > 0 && (
          <ImageGalleryItem items={images} showImage={this.showImage} />
        )}
        {Boolean(images.length) && <Button onLoadMore={this.loadMore} />}
        {showModal && (
          <Modal imageDetail={imageDetail} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  filter: PropTypes.string.isRequired,
};
