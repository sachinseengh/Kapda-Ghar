import React from 'react'
import MainCarousel from '../../Components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <div>
<MainCarousel></MainCarousel>

<div>
    <HomeSectionCarousel></HomeSectionCarousel>
</div>
    </div>
  )
}

export default HomePage