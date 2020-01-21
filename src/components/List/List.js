import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';


class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }
    render() {
    return (
        <section className={styles.component}>
            <Hero titleText={this.props.title} heroImgSrc={this.props.imgSrc} />
            <div className={styles.description}>
                {this.props.children}
            </div>
            <div className={styles.columns}>
                <Column colTitle="Brainz" />
                <Column colTitle="Legz" />
                <Column colTitle="Boobz" />
            </div>
        </section>
    )
    }
}

export default List;
