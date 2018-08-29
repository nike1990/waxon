import React, {Component} from 'react';
import PropTypes from 'prop-types'

import link from 'src/assets/link.png'
import lupa from 'src/assets/lupa.png'
import styles from './styles.scss'

class ItemProject extends Component {
    render() {
        const {data} = this.props
        return (
            <div id="ItemProject">
                <a href="#">
                    <img src={data.img} alt=""/>
                    <div className="linkLupa">
                        <img src={link} alt=""/>
                        <img src={lupa} alt=""/>
                    </div>
                    <h3>{data.title}</h3>
                    <p>{data.descriptions}</p>
                </a>
            </div>
        )
    }
}

ItemProject.propTypes = {}

export default ItemProject
