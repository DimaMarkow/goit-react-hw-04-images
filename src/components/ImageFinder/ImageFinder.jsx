import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/ImageFinder/Searchbar/Searchbar';
import ImageGallery from 'components/ImageFinder/ImageGallery/ImageGallery';

import css from 'components/ImageFinder/imagefinder.module.css';

const ImageFinder = () => {
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const normalizedFilter = data.toLowerCase();
    setFilter(normalizedFilter);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={formSubmitHandler} />
      <ImageGallery filter={filter} />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        style={{ fontSize: 15 }}
      />
    </div>
  );
};

export default ImageFinder;
