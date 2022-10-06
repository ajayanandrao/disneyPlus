import React from 'react'
import './Dem.scss';
import './DemOri.scss';
import banner from '../Json/banner.json';

export const bannerlist = banner.map((item) => (
  <div className="carousel-cell">
    <div className="outer">
      <div className="innerOne">
        <img className='ImgC' src={item.img} />
        <div className="ll">
      <div className="ll-text-aria">
        <p className="ll-movie-name">{item.name}</p>
        <p>{item.title}</p>
        <p>{item.textDesLower}</p>
      </div>
    </div>
      </div>
    </div>
  </div>

))

const Dem = () => {


  return (
    <>
   <div className="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true} ' >
              {bannerlist}
        </div>  
</>
        
    
  )
}

export default Dem