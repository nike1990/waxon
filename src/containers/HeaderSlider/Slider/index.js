import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Slider from "react-slick";

import leftArrow from 'src/assets/leftArrow.png'
import rightArrow from 'src/assets/rightArrow.png'
import styles from './styles.scss'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="slick-arrow"
            style={{ ...style, display: "inline-block", float: "right"}}
            onClick={onClick}
        >
            <img src={rightArrow} alt="rightArrow"/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="slick-arrow"
            style={{ ...style, display: "inline-block", float: "left"}}
            onClick={onClick}
        >
            <img src={leftArrow} alt="rightArrow"/>
        </div>
    );
}

class SliderSimply extends Component {
    render(){
        const settings = {
            dots: true,
            dotsClass: "my-dots",
            infinite: true,
            speed: 900,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div className="center" >
                <Slider {...settings} className="sliderSl">
                    <div className="itemSlider">
                        <h3>Unique and Modern Design</h3>
                        <h2>Portfolio PSD Template</h2>
                        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil
                            imperdiet <br/> doming id quod mazim placerat facer possim assum.</p>
                        <button>Get Started</button>
                    </div>
                    <div className="itemSlider">
                        <h3>Unique and Modern Design</h3>
                        <h2>Portfolio PSD Template</h2>
                        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil
                            imperdiet <br/> doming id quod mazim placerat facer possim assum.</p>
                        <button>Get Started</button>
                    </div>
                    <div className="itemSlider">
                        <h3>Unique and Modern Design</h3>
                        <h2>Portfolio PSD Template</h2>
                        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil
                            imperdiet <br/> doming id quod mazim placerat facer possim assum.</p>
                        <button>Get Started</button>
                    </div>
                    <div className="itemSlider">
                        <h3>Unique and Modern Design</h3>
                        <h2>Portfolio PSD Template</h2>
                        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil
                            imperdiet <br/> doming id quod mazim placerat facer possim assum.</p>
                        <button>Get Started</button>
                    </div>
                    <div className="itemSlider">
                        <h3>Unique and Modern Design</h3>
                        <h2>Portfolio PSD Template</h2>
                        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil
                            imperdiet <br/> doming id quod mazim placerat facer possim assum.</p>
                        <button>Get Started</button>
                    </div>
                </Slider>
            </div>
        )
    }
}

SliderSimply.propTypes = {}

export default SliderSimply
