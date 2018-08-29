import React, {Component} from 'react';
import PropTypes from 'prop-types'

import styles from './styles.scss'
import arrow from 'src/assets/arrowRecent.png'

class ItemRecentPost extends Component {
    render() {
        const {data} = this.props
        return (
            <div id="ItemRecentPost">
                <img src={data.img} alt=""/>
                <h3>{data.title}</h3>
                <p>{data.descriptions}</p>
                <div id="readMoreRecent">
                    <a href="">Read More <img src={arrow} alt=""/></a>
                </div>
            </div>
        )
    }
}

ItemRecentPost.propTypes = {}

export default ItemRecentPost
