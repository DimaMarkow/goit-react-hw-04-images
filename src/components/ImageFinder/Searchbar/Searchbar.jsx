import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ImageFinder/imagefinder.module.css';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

class Searchbar extends React.Component {
  state = {
    imageName: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ imageName: value });
  };

  // resetForm = () => {
  //   this.setState({ imageName: '' });
  // };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast.error('Please, fill the field for filter!', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'light',
      });
      return;
    }
    this.props.onSubmit(this.state.imageName);
    // this.resetForm();
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
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
            value={this.state.imageName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
