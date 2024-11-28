import React, { useState, useEffect } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


const HomeSectionCarousel = ({data,sectionName}) => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Logging activeIndex to check if it updates
  // console.log('Current Active Index:', activeIndex);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    console.log('Prev clicked');
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const slideNext = () => {
    console.log('Next clicked');
    setActiveIndex((prevIndex) => 
      Math.min(prevIndex + 1, data.length - 5) // Max index based on visible items
    );
  };

  const syncActiveIndex = ({ item }) => {
    console.log('Slide changed to:', item);
    setActiveIndex(item);
  };

  const items =data.slice(0, 10).map((item) => (
    <HomeSectionCard key={item.id} product={item} />
  ));

  return (
    <div>
      <h2 className="border-b border-neutral-400 text-2xl font-extrabold text-gray-800 py-5 px-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex} // control active index via state
        />

        {activeIndex < items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(30%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
            className="z-50 bg-white"
          >
            <ChevronLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        )}

        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-20%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="prev"
            className="z-50 bg-white"
          >
            <ChevronLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
