import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
// import Creator from '../Creator/Creator.js';
// import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: this.props.cards || [],
    };
  }

  /*addCard(title) {
    console.log(title, 'dziala');

    let newState = this.state;

    newState.cards.push({
      key: newState.cards.length,
      title: title,
    });

    //console.log(newState);

    this.setState(newState);
  }*/

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
        </h3>
        {cards.map(columnData => (
          <Card key={columnData.id} {...columnData} />
        ))}
        {/*<div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>*/}
      </section>
    );
  }
}

Column.propTypes = {
  title: PropTypes.node,
  cards: PropTypes.string,
  icon: PropTypes.node,
};

export default Column;
