import React, {Component} from 'react'
import PropTypes from 'prop-types'

import ItemAboutUs from './components/ItemAboutUs'

import config from './config.js'
import styles from './styles.scss'

class AboutUs extends Component {
    render() {
        return (
            <div className="AboutUs center">
                {
                    config.map(item => (
                        <ItemAboutUs
                            data={item}
                        />
                    ))
                }

            </div>
        )
    }
}

AboutUs.propTypes = {}

export default AboutUs
