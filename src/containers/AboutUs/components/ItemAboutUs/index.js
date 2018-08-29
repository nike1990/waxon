import React, {Component} from 'react';
import PropTypes from 'prop-types'

import styles from './styles.scss'

class ItemAboutUs extends Component {
    render() {
        const {data} = this.props
        return (
            <div className="ItemAboutUs">
                <img src={data.img} alt=""/>
                <h3>{data.title}</h3>
                <p>{data.descriptions}</p>
            </div>
        )
    }
}

ItemAboutUs.propTypes = {}

export default ItemAboutUs
