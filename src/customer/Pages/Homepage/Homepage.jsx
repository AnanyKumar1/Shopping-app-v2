import MainCarousel from '../../component/HomeCarousel/MainCarousel';
import SectionCarousel from '../../component/HomeSectionCarousel/sectionCarosel';
import { mens_kurta } from './../../../data/Men/men_kurta';

const Homepage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-5 flex flex-col justify-center px-5 lg:px-10 ">
        {/* Passing data (mens_kurta) to each SectionCarousel */}
        <SectionCarousel data={mens_kurta} SectionName={"Men's kurta"}/>
        <SectionCarousel data={mens_kurta} SectionName={"Men's kurta"}/>
        <SectionCarousel data={mens_kurta} SectionName={"Men's kurta"}/>
        <SectionCarousel data={mens_kurta} SectionName={"Men's kurta"}/>
        <SectionCarousel data={mens_kurta} SectionName={"Men's kurta"}/>
      </div>
    </div>
  );
};

export default Homepage;
