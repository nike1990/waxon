import React, {Component} from 'react'
import PropTypes from 'prop-types'

import ItemMobile from './components/ItemMobile'

import styles from './styles.scss'
import mobile from 'src/assets/iphone-in-hand.png'
import config from "../MobileDevices/config";

class MobileDevices extends Component {
    render() {
        return (
            <div className="mobile">
                <div className="mobile-content center clearfix">
                    <img src={mobile} alt=""/>
                    <h3>Excellent for Mobile Devices.</h3>
                    <p>
                        Qisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis <br/>
                        nisl ut aliquip ex ea commodo consequat. Investigationes demonstraverunt lectores <br/>
                        legere me lius quod ii legunt saepius claritas. Eodem modo typi, qui nunc nobis <br/>
                        videntur parum clari, fiant sollemnes in futurum.
                    </p>
                    <ul>
                        <li>Nam liber tempor cum soluta nobis eleifend option;</li>
                        <li>Option congue nihil imperdiet doming id quod mazim placerat facer;</li>
                        <li>Eodem modo typi, qui nunc nobis videntur parum futurum;</li>
                        <li>Investigationes demonstraverunt lectores</li>
                    </ul>
                </div>
                <div className="mobile-f">
                    {
                        config.map(item => (
                            <ItemMobile
                                data={item}
                            />
                        ))
                    }

                </div>
            </div>
        )
    }
}

MobileDevices.propTypes = {}

export default MobileDevices
