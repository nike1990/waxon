import React, {Component} from 'react'
import PropTypes from 'prop-types'

import ItemProject from './components/ItemProject'

import styles from './styles.scss'
import config from './config.js'

class Project extends Component {
    render() {
        return (
            <div className="project">
                <div className="center">
                    <h3>Our Latest Projects.</h3>
                    <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
                        Claritas est etiam <br/> processus dynamicus, qui sequitur mutationem consuetudium.</p>
                    <ul class="nav-p">
                        <li><a href="">All</a></li>
                        <li><a href="">Web Design</a></li>
                        <li><a href="">Mobile App</a></li>
                        <li><a href="">Illustration</a></li>
                        <li><a href="">Photography</a></li>
                    </ul>
                    <div className="project-items center">
                        {
                            config.map(item => (
                                <ItemProject
                                    data={item}
                                />
                            ))
                        }
                    </div>
                    <a href="#">
                        <button>Load More</button>
                    </a>
                </div>
            </div>
        )
    }
}

Project.propTypes = {}

export default Project
