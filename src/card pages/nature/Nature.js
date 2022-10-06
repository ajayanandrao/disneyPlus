import React, { Fragment } from 'react'
import Flickity from 'react-flickity-component'
import natureJson from '../../Json/nature.json';

const Nature = () => {
    const flickityOptions = {
        initialIndex: 3,
        accessibility: true,
        wrapAround: true,
        // groupCells: 5
        // autoPlay:1500
    }
  return (
    <>
     <div className='category'>Exploring Nature & Wildlife</div>
     <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >

                {
                    natureJson.map(item => {
                        return (
                            <Fragment key={item.id}>
                                <div className='card-main-container'>
                                <div className='inner-div'>

                                    <div className="card-text-container">
                                        <div className='textTitle'>{item.textTitle}</div>
                                        <div className='textDec'>{item.textDes}</div>
                                        <div className='textDecLower'>{item.textDesLower}</div>
                                    </div>

                                    <div className="img-main-container">
                                        <img className="disney-img" src={item.img} />
                                    </div>

                                </div>
                            </div>
                            </Fragment>
                            )
                    }

                    )
                }

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

export default Nature