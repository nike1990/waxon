import React, {Component} from 'react'
import PropTypes from 'prop-types'

import browserCenter from 'src/assets/browserCenter.png'
import browserLeft from 'src/assets/browserLeft.png'
import browserRight from 'src/assets/browserRight.png'
import styles from './styles.scss'

class Realization extends Component {
    render() {
        return (
            <div className="ideas  clearfix">
                <h3>Waxom is Realization of your Ideas.</h3>
                <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
                    Claritas est etiam <br/> processus dynamicus, qui sequitur mutationem consuetudium.
                </p>
                <div className="img ">
                    <img src={browserCenter} alt="center" className="centerImg"/>
                    <img src={browserLeft} alt="left" className="leftImg"/>
                    <img src={browserRight} alt="right" className="rightImg"/>
                </div>
                <div className="ideas-f" >
                    <div className="center">
                        <div className="ideas-text left">
                            <h3><span>Waxom</span> Multipurpose WordPress Theme</h3>
                            <p>Don't Forget to Rate the Template. Thanks so much!</p>
                        </div>
                        <a href="#">
                            <button>Purchase Now</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

Realization.propTypes = {}

export default Realization
