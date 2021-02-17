import React from 'react';
import PropTypes from 'prop-types';
import './Section.sass';
import { Gallery } from './components/Gallery';

export const Section = ({ color, type }) => {
  const styles = {
    backgroundColor: `${color}`,
  };

  return (
    <section className="section" style={styles}>
      Some section text!
       
      {type === 'gallery' && <Gallery />}
    </section>
  );
}

Section.propTypes = {
  color: PropTypes.string.isRequired,
  type: PropTypes.string
};
