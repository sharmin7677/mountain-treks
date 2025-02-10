import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import bimg1 from "../../assets/banner/banner1.jpg"
import bimg2 from "../../assets/banner/banner2.jpg"
import bimg3 from "../../assets/banner/banner3.jpg"

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={bimg1} />
                </div>
                <div>
                    <img src={bimg2} />
                </div>
                <div>
                    <img src={bimg3} />
                </div>
                
            </Carousel>
    );
};

export default Banner;