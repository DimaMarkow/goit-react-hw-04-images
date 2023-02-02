import { useState } from 'react';
import PropTypes from 'prop-types';
import css from 'components/ImageFinder/imagefinder.module.css';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [imageName, setImageName] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setImageName(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (imageName.trim() === '') {
      toast.error('Please, fill the field for filter!', {
        position: 'top-right',
        autoClose: 2000,
        theme: 'light',
      });
      return;
    }
    onSubmit(imageName);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <ImSearch style={{ width: 20, height: 20 }} />
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormIinput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imageName}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
