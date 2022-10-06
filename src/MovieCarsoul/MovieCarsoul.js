import React, { Fragment } from 'react'
import Flickity from 'react-flickity-component'
import './movieCarsoul.scss';
import imgJson from '.././Json/imgLink.json';
import './css.scss';
import { Link } from 'react-router-dom';


export const carouselList = imgJson.map((CarsoulList) => (
    <Fragment key={CarsoulList.id}>

        {/* <div className="sliderBoxes">
            <div className="margin">
                <div>
                    <Link to={CarsoulList.imgRout}>
                        <img className='cimg' src={CarsoulList.Cimg} />
                    </Link>
                </div>
            </div>
        </div> */}
                            <div className='card-main-container'>
                                <div className='inner-div'>
                                
                                    <div className="card-text-container">
                                        <Link to={CarsoulList.mrout}>
                                    <div className='textTitle'>{CarsoulList.textTitle}</div>
                                        <div className='textDec'>{CarsoulList.textDes}</div>
                                        <div className='textDecLower'>{CarsoulList.textDesLower}</div>
                                    </Link>
                                    </div>
                                    
                                    <div className="img-main-container">
                                        <img className="disney-img" src={CarsoulList.img} />
                                    </div>

                                </div>
                            </div>

    </Fragment>
));

const movieCarsoul = () => {

    const flickityOptions = {
        initialIndex: 3,
        accessibility: true,
        wrapAround: true,
        // groupCells: 3
        // autoPlay:1500
    }
    return (
        <>
            <div className='category'>Recommended For You</div>
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                // reloadOnUpdate // default false
                // static // default false
            >
                
                
                                
                               {carouselList}
                            
                           
                {/* <div className='card-main-container'>
                    <div className='inner-div'>

                        <div className="card-text-container">
                            sdf
                        </div>

                        <div className="img-main-container">
                            <img className="disney-img" src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7977/1317977-v-2b6393692cd1' />
                        </div>

                    </div>
                </div> */}
                {/* <imgList/> */}

            </Flickity>
        </>
    )
}

export default movieCarsoul