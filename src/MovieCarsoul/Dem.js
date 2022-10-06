import React from 'react'
import './Dem.scss';
import './DemMixin.scss';
import banner from '../Json/banner.json';
import Flickity from 'react-flickity-component'

export const bannerlist = banner.map((item) => (
  <div className="carousel-cell">
    <div className="outer">
      <div className="innerOne">
        <img className='ImgC' src={item.img} />
        <div className='inner-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque placeat error fugiat nam nulla voluptatem ratione neque blanditiis totam sequi ullam consequatur ex, quis in perferendis rerum aliquam cupiditate dolor?
        </div>
      </div>
    </div>
  </div>

))

const Dem = () => {
  var flickityOptions = {
    initialIndex: 1,
    cellSelector: false,
    accessibility: true,
    wrapAround: true,
    autoPlay: 1000
  }
  return (
    <>
      {/* <Flickity options={flickityOptions}
        classNameName={'carouse'}
        elementType={'div'}
        disableImagesLoaded={false}> */}

        <div className="carousel" data-flickity='{ "wrapAround": true, "cellSelector": ".carousel-cell"  }' >
              {bannerlist}
        </div>

      {/* </Flickity> */}




      {/* <MovieCarsoul/> */}
    </>
  )
}

export default Dem