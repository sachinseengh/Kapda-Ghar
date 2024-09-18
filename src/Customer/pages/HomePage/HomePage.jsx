import React from 'react'
import MainCarousel from '../../Components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/men_kurta'

const HomePage = () => {
  return (
    <div>
<MainCarousel></MainCarousel>

<div className='space-y-10 py-20 flex flex-col justify-center'>
    <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}></HomeSectionCarousel>
    <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}></HomeSectionCarousel>
    <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}></HomeSectionCarousel>
    <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}></HomeSectionCarousel>
    <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}></HomeSectionCarousel>

</div>
    </div> 
  )
}

export default HomePage