import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeCarouselData } from './MainCarouselData';


 const Carousel = () => {


    const items = homeCarouselData.map((item)=>
        (<img className= "cursor-pointer" role='presentation' src={item.image} alt="" ></img>))



   return (<AliceCarousel 
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1500}
        infinite
    />)
   };


export default Carousel;