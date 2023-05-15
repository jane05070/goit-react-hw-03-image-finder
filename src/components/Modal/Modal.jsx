import React from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

export default class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.closeByEsc);
      }
    
      componentWillUnmount() {
        window.removeEventListener('keydown', this.closeByEsc);
      }
    
      closeByEsc = (e) => {
        if (e.code === 'Escape') {
          this.props.closeModal();
        }
      };
    
      closeByBackdrop = event => {
        if (event.target === event.currentTarget) {
          this.props.closeModal();
        }
      };


  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <div className={s.Overlay} onClick={this.closeByBackdrop}>
        <div className={s.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};