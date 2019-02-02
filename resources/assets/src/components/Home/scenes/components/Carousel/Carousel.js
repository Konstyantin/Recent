import React, {Component} from "react";
import Slider from "react-slick";

import './style.css';

class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000
        };
        return (
            <div>
                <Slider {...settings} className={'carousel-slider'}>
                    <div>
                        <img src="http://t.commonsupport.com/catania/images/main-slider/image-1.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="http://t.commonsupport.com/catania/images/main-slider/image-2.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="http://t.commonsupport.com/catania/images/main-slider/image-3.jpg" alt=""/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Carousel;