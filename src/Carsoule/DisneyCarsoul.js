import React from 'react'
import './DisneyCarsoul.scss';
import Flickity from "react-flickity-component";
import './CarsouleMixin.scss';

const DisneyCarsoul = () => {

    const imgs1 = {
      backgroundImage: `url(https://www.posterposse.com/wp-content/uploads/2019/03/CAPMARVEL-1024x379.jpg)`
    }
    const imgs2 = {
      backgroundImage: `url(https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7972/1317972-h-3217e6c47ab5)`
    }
    const imgs3 = {
      backgroundImage: `url(https://www.slashfilm.com/img/gallery/thor-love-and-thunder-director-taika-waititi-has-no-idea-whats-next-for-that-credit-scene-character/intro-1657304061.jpg)`
    }

    var flickityOptions = {
        initialIndex: 1,
        cellSelector: '.sliderBoxes',
        accessibility: true,
        wrapAround: true,
        autoPlay: 1000
    }
  return (
    <>
     <Flickity  options={flickityOptions}
      classNameName={'carouse'}
      elementType={'div'}
      disableImagesLoaded={false}>
      

[
      <div className="carousel" data-flickity='{ "wrapAround": true }' >

<div className="carousel-cell">
  <div className="l">
    <div className="ll">
      <div className="ll-text-aria">
        <p className="ll-movie-name">captain marvel</p>
        <p>marvel . superhero</p>
        <p>carol danvers becomes on of the universe's most powerful heroes when earth is caught in the middle of a galactic war between two alien races.... 
        </p>
      </div>
    </div>
    <div className="imgs" style={imgs1}></div>
  </div>
  
</div>

<div className="carousel-cell">
  <div className="l">
    <div className="ll">
      <div className="ll-text-aria">
        <p className="ll-movie-name">she hulk</p>
        <p>marvel . superhero</p>
        <p>NEW EPISODE EVERY WEDNESDAY AT 12:30 PM. is a Superhero jennifer Walters, an attorney specialising in suprehuman-oriented legal cases, must navigate the complicated life of a single, green 6-foot-7-inch hulk....
        </p>
      </div>
    </div>
    <div className="imgs" style={imgs2}></div>
  </div>
</div>

<div className="carousel-cell">
  <div className="l">
    <div className="ll">
      <div className="ll-text-aria">
        <p className="ll-movie-name">thor love and thunder</p>
        <p>marvel . superhero</p>
        <p>the god of thunder teams up with king valkerie, korg and ex-girlfriend-turned-mighty-thore 
          jane foster to take on a galactic killer known as gorr the god butcher....
        </p>
      </div>
    </div>
    <div className="imgs" style={imgs3}></div>
  </div>
</div>

</div>
]        
      
    </Flickity>
    </>
  )
}

export default DisneyCarsoul

