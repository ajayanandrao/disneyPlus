import React from 'react'
import Flickity from 'react-flickity-component';
import banner from '../Json/banner.json';
import './Dem.scss';

export const bannerList = banner.map(bannerItem => (

  <div className="carousel-cell">
    <div className="Outer">
      <div className="innerOne">

        <img className='ImgC' src={bannerItem.img} />


        <div className="ll">
          <div className="ll-text-aria">
            <p className="ll-movie-name">{bannerItem.name}</p>
            <p>{bannerItem.title}</p>
            <p>{bannerItem.textDesLower}</p>
          </div>
        </div>

      </div>
    </div>
  </div>

))

const Dem = () => {

  return (
    <>
        <div className="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true}'>
          {bannerList}
        </div>
    </>
  )
}

export default Dem