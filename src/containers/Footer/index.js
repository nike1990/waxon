import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

class Footer extends Component {
    render() {
        return (
            <div className="footer ">
                <div className="center footer-f ">
                    <ul class="nav-f ">
                        <li>Copyright © 2015 <span>Waxom</span></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                    <ul class="nav-des ">
                        <li>Designed by <span>ThemeFire</span></li>
                        <li>Only on <span>Envato Market</span></li>
                    </ul>
                </div>
            </div>


        )
    }
}

Footer.propTypes = {}

export default Footer
