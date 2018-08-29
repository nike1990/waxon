import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'
import iconProd1 from 'src/assets/logoProd1.png'
import iconProd2 from 'src/assets/logoProd2.png'
import iconProd3 from 'src/assets/logoProd3.png'
import iconProd4 from 'src/assets/logoProd4.png'

class LogoProd extends Component {
    render() {
        return (
            <div className="logoProd">
                <div className="logoProd-l center">
                    <div><img src={iconProd1} alt=""/></div>
                    <div><img src={iconProd2} alt=""/></div>
                    <div><img src={iconProd3} alt=""/></div>
                    <div><img src={iconProd4} alt=""/></div>
                </div>
            </div>

        )
    }
}

LogoProd.propTypes = {}

export default LogoProd
