import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/ImageFinder/Searchbar/Searchbar';
import ImageGallery from 'components/ImageFinder/ImageGallery/ImageGallery';

import css from 'components/ImageFinder/imagefinder.module.css';

class ImageFinder extends React.Component {
  state = {
    filter: '',
  };

  formSubmitHandler = data => {
    const normalizedFilter = data.toLowerCase();
    this.setState({ filter: normalizedFilter });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery filter={this.state.filter} />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          style={{ fontSize: 15 }}
        />
      </div>
    );
  }
}

export default ImageFinder;

// 31955836-4f23a30b6c1dc45c2c659779e
