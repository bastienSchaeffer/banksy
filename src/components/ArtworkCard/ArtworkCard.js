import PropTypes from 'prop-types';
import React from 'react';
import * as styles from './ArtworkCard.module.scss';

const ArtworkCard = ({ title, slug }) => (
  <div className='col-12  pb-3'>
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{slug}</p>
        <a href={`/gallery/${slug}`} className='btn btn-primary'>
          Read more
        </a>
      </div>
    </div>
  </div>
);

ArtworkCard.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
};

ArtworkCard.defaultProps = {
  title: ``,
  slug: ``,
};

export default ArtworkCard;
