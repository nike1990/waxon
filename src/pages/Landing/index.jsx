import React, {Component} from 'react'
import PropTypes from 'prop-types'

import HeaderSlider from 'containers/HeaderSlider'
import AboutUs from 'containers/AboutUs'
import Realization from 'containers/Realization'
import Project from 'containers/Project'
import VideoPresentation from 'containers/VideoPresentation'
import MobileDevices from 'containers/MobileDevices'
import Recent from 'containers/RecentPost'
import LogoProd from 'containers/LogoProd'
import FooterContent from 'containers/FooterContent'
import Footer from 'containers/Footer'


import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

class Example extends Component {
    render() {
        return (
            <div>
                <HeaderSlider/>
                <AboutUs/>
                <Realization/>
                <Project/>
                <VideoPresentation/>
                <MobileDevices/>
                <Recent/>
                <LogoProd/>
                <FooterContent/>
                <Footer/>
            </div>
        )
    }
}

Example.propTypes = {}

export default Example
