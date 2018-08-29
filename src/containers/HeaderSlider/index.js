import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Header from 'containers/HeaderSlider/Header'
import SliderSimply from 'containers/HeaderSlider/Slider'

import styles from './styles.scss'

class HeaderSlider extends Component {
    render() {
        return (
            <div id="header" className="center">
                <Header/>
                <SliderSimply/>
            </div>
        )
    }
}

HeaderSlider.propTypes = {}

export default HeaderSlider