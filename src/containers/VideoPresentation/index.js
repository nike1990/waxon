import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'
import playVideo from 'src/assets/playVideo.png'

class VideoPresentation extends Component {
    render() {
        return (
            <div className="video">

                <div className="video-content center">
                    <img src={playVideo} alt="playVideo"/>
                    <h3>Waxom Video Presentation</h3>
                    <p>Investigationes demonstraverunt lectores legere me lius quod ii
                        legunt <br/> saepius, qui sequitur mutationem consuetudium.</p>
                    <span>03:26</span>
                </div>

            </div>
        )
    }
}

VideoPresentation.propTypes = {}

export default VideoPresentation
