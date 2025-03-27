import { Carousel } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';
import logo1 from '../assets/HeroBanner-6.jpg';
import logo2 from '../assets/HeroBanner-5.jpg';
import logo3 from '../assets/HeroBanner-3.jpg';
import logo4 from '../assets/HeroBanner-13.jpg';
import logo5 from '../assets/HeroBanner-12.jpg';

const HeroBanner = () => {
  const { darkMode } = useTheme();

  return (
    <Carousel id="heroCarousel" interval={5000} fade controls indicators>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo1}
          alt="First slide"
          style={{ height: '65vh', objectFit: 'cover', filter: darkMode ? 'brightness(0.7)' : 'none' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo4}
          alt="First slide"
          style={{ height: '65vh', objectFit: 'cover', filter: darkMode ? 'brightness(0.7)' : 'none' }}
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo2}
          alt="Second slide"
          style={{ height: '65vh', objectFit: 'cover', filter: darkMode ? 'brightness(0.7)' : 'none' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo5}
          alt="First slide"
          style={{ height: '65vh', objectFit: 'cover', filter: darkMode ? 'brightness(0.7)' : 'none' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo3}
          alt="Third slide"
          style={{ height: '65vh', objectFit: 'cover', filter: darkMode ? 'brightness(0.7)' : 'none' }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroBanner;