import React from 'react'
import './VideoCard.scss';
import desney from './video/disney.mp4';
import pixar from './video/pixar.mp4';
import marval from './video/marval.mp4';
import star from './video/star.mp4';
import geo from './video/geo.mp4';
import { Link } from 'react-router-dom';

const VideoCard = () => {

    const videoImg1 = {
        
        backgroundImage: `url(https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6347/746347-h)`
    }
    const videoImg2 = {
        backgroundImage: `url(https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6348/746348-h)`
    }
    const videoImg3 = {
        backgroundImage: `url(https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6349/746349-h)`
    }
    const videoImg4 = {
        backgroundImage: `url(https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6357/746357-h)`
    }
    const videoImg5 = {
        backgroundImage: `url(https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6355/746355-h)`
    }

    return (
        <>
                <div className="wrapper">
                    <div className="card-info-container">

                        <div className="card-info" style={videoImg1}>
                            <video src={desney}  autoPlay loop muted />
                        </div>
                        
                        
                        <div className="card-info" style={videoImg2}>
                            <video src={pixar}  autoPlay loop muted />
                        </div>

                        <div className="card-info" style={videoImg3}>
                        <video src={marval}  autoPlay loop muted />
                        </div>

                        <div className="card-info" style={videoImg4}>
                        <video src={star}  autoPlay loop muted />
                        </div>

                        <div className="card-info " style={videoImg5}>
                        <video src={geo} autoPlay loop muted />
                        </div>

                    </div>
                </div>

        </>
    )
}

export default VideoCard