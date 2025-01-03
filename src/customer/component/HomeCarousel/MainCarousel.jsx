import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
  const items = mainCarouselData.map((item) =>
    // eslint-disable-next-line react/jsx-key
    <img className="cursor-pointer mt-6" role="presentation" src={item.Image} alt=""/>
  );

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarousel;
