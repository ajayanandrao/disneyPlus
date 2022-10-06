import React from 'react'
import Navbar from './Navbar/Navbar'
import DisneyCarsoul from './Carsoule/DisneyCarsoul'
import './Home.scss';
import MovieCarsoul from './MovieCarsoul/MovieCarsoul';
import VideoCard from './Video Card/VideoCard';
import Nature from './card pages/nature/Nature';
import Cartoon from './card pages/cartoon/Cartoon';
import StarWar from './card pages/starwar/StarWar';
import Footer from './footer/Footer';
import Dem from './MovieCarsoul/Dem';


const Home = () => {
  

  return (
    <>
      <Navbar />
      <div className="mt">
        
        {/* <DisneyCarsoul /> */}
        {/* <VideoCard /> */}
               <Dem/>
        <MovieCarsoul />
        {/* <Cartoon /> */}
       {/* <StarWar/> */}
        {/* <Nature />   */}
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Home

// <div>about</div>
//                 <div>disney+hotstar</div>  <div>terms of use</div>
//                 <div>privacy policy</div>  <div>FAQ</div>
//                 <div>feedback</div> <div>careers</div>