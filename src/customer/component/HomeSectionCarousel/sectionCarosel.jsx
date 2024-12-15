/* eslint-disable react/prop-types */
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { useState } from "react";

const SectionCarousel = ({ data = [], SectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEMS_PER_PAGE = 5; // Define how many items to show per page

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  // Calculate the sliced items based on the activeIndex    
  const items = data
    .slice(activeIndex * ITEMS_PER_PAGE, (activeIndex + 1) * ITEMS_PER_PAGE)
    .map((item, index) => <HomeSectionCard key={index} product={item} />);

  const slidePrev = () => setActiveIndex(Math.max(activeIndex - 1, 0)); // Ensure activeIndex doesn't go below 0
  const slideNext = () =>
    setActiveIndex(
      Math.min(activeIndex + 1, Math.floor(data.length / ITEMS_PER_PAGE) - 1)
    ); // Ensure activeIndex doesn't exceed the number of pages

  const syncactiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {SectionName}
      </h2>
      <div className="relative p-5 border-b border-gray-200 ">
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncactiveIndex}
          activeIndex={activeIndex}
        />

        {/* Next button (only show when there are more items to show) */}
        {activeIndex < Math.floor(data.length / ITEMS_PER_PAGE) - 1 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {/* Previous button (only show when activeIndex is greater than 0) */}
        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SectionCarousel;
