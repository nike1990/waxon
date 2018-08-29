import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'
import logoF from 'src/assets/logoFooter.png'
import img1 from 'src/assets/dribleWidget1.png'
import img2 from 'src/assets/dribleWidget2.png'
import img3 from 'src/assets/dribleWidget3.png'
import img4 from 'src/assets/dribleWidget4.png'
import arrow from 'src/assets/arrow.png'

class FooterContent extends Component {
    render() {
        return (
            <div className="footerH">
                <div className="center footer-content ">
                    <div className="colomn item1">
                        <div className="logo-f ">
                            <img src={logoF} alt=""/>
                            <p>Waxom</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci suscipit lobortis claritatem.</p>
                        </div>
                        <div id="readMore">
                            <a href="">Read More <img src={arrow} alt=""/></a>
                        </div>
                    </div>
                    <div className="colomn">
                        <h4>Recent Posts</h4>
                            <div className="data">
                                <a href="#">
                                    <span>September 08, 2015</span>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                                </a>
                            </div>
                        <div className="data">
                            <a href="#">
                                <span>September 08, 2015</span>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                            </a>
                        </div>
                        <div className="data">
                            <a href="#">
                                <span>September 08, 2015</span>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                            </a>
                        </div>
                    </div>

                    <div className="colomn" id="twitter">
                        <h4>Our Twitter</h4>
                        <div className="data">
                                <p><a href="#">@waxom</a> Cum soluta nobis eleifend option congue nihil imperdiet doming</p>
                                <span>3 mins ago</span>
                        </div>
                        <div className="data">
                                <p>Mirum est <a href="#">#envato</a> notare quam littera gothica, quam nunc putamus parum anteposuerit litterarum</p>
                                <span>5 hours ago</span>
                        </div>
                        <div className="data">
                                <p>Soluta nobis option <a href=""><span>bit.ly/1Hniso7</span></a></p>
                                <span>20 days ago</span>
                        </div>
                    </div>

                    <div className="colomn" id="dribble" >
                        <h4>Dribbble Widget</h4>
                        <img src={img1} alt=""/>
                        <img src={img2} alt=""/>
                        <img src={img3} alt=""/>
                        <img src={img4} alt=""/>
                    </div>
                </div>
            </div>


        )
    }
}

FooterContent.propTypes = {}

export default FooterContent
