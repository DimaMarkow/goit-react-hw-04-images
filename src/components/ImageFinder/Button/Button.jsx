import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/ImageFinder/imagefinder.module.css';

class Button extends React.Component {
  render() {
    return (
      <button
        type="button"
        className={css.Button}
        onClick={this.props.onLoadMore}
      >
        Load more
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
