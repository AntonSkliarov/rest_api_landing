import React from 'react';
import PropTypes from 'prop-types';
import './Section.sass';
import { Gallery } from './components/Gallery';

export const Section = ({ type }) => {
  const color = {
    'gallery': 'linear-gradient(#e66465, #9198e5)',
    'info': 'pink',
    'about': 'chocolate'
  }

  const styles = {
    background: `${color[type]}`,
  };

  return (
    <section className="section" style={styles}>
      {type === 'gallery' && <Gallery />}

      {type === 'info' && (
        <div className="info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Perferendis atque doloribus tempore sint repellat,
            quidem voluptates sapiente accusantium sed molestias
            deleniti pariatur facere rem vero cumque voluptatibus
            laborum ipsam facilis!
          </p>
        </div>
      )}
    </section>
  );
}

Section.propTypes = {
  type: PropTypes.string
};
