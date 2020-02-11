import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class Card extends React.Component {

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
      </section>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
