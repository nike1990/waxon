import React, {Component} from 'react'
import PropTypes from 'prop-types'

import ItemRecentPost from './components/ItemRecentPost'

import config from './config.js'
import styles from './styles.scss'

class Recent extends Component {
    render() {
        return (
            <div className="center post">
                <h3>Recent Posts.</h3>
                <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
                    Claritas est etiam <br/>processus dynamicus, qui sequitur mutationem consuetudium.</p>
                <div className="recent-items center">
                    {
                        config.map(item => (
                            <ItemRecentPost
                                data={item}
                            />
                        ))
                    }
                </div>
                <div id="arrow">
                    <div id="leftArrow"><a href="#">&nbsp;</a></div>
                    <div id="rightArrow"><a href="#">&nbsp;</a></div>
                </div>
            </div>


        )
    }
}

Recent.propTypes = {}

export default Recent
