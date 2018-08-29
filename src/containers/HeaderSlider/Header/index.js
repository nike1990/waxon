import React, {Component} from 'react'
import PropTypes from 'prop-types'

import iconCart from 'src/assets/icon-cart.png'
import iconSearch from 'src/assets/icon-search.png'
import logos from 'src/assets/logos.png'

import styles from './styles.scss'

class Header extends Component {
    render() {
        return (
            <div class="container center clearfix">
                <div class="logo">
                    <a href="#"><img src={logos} alt=""/></a>
                    <p>Waxom</p>
                </div>
                <div className="search">
                    <a href="#"><img src={iconCart} alt=""/></a>
                    <a href="#"><img src={iconSearch} alt=""/></a>
                </div>
                <ul class="nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Shortcodes</a></li>
                    <li><a href="">Contact</a></li>
                </ul>


            </div>
        )
    }
}

Header.propTypes = {}

export default Header
