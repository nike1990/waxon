import React, {Component} from 'react';
import PropTypes from 'prop-types'

import styles from './styles.scss'

class ItemMobile extends Component {
    render() {
        const {data} = this.props
        return (
            <div className="ItemMobile">
                <img src={data.img} alt=""/>
                <h3>{data.title}</h3>
                <p>{data.descriptions}</p>
            </div>
        )
    }
}

ItemMobile.propTypes = {}

export default ItemMobile
