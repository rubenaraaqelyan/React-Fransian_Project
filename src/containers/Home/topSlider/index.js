import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
import { Sliders } from "../../../components";
import "./style.css"
import {ReactComponent as Arrow } from "../../../svg/arrow.svg";
import five from "../../../assets/images/phone.png";
import { data } from "../../../utils";
import {useTranslation} from "react-i18next";
import {changeLanguageAction} from "../../../store/actions/language";



const TULUZ_LAT = 43.604500
const TULUZ_LONG = 1.444000
const MARSEL_LAT = 43.296398
const MARSEL_LONG = 5.370000




const NextArrow = (props) => {

    const { onClick } = props;
    return (
        <div className={'nextArrow'} onClick={onClick}>
            <Arrow className={'slide_arrow'} />

        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className='prevArrow' onClick={onClick}>
            <Arrow className={'slide_arrow'} />

        </div>
    );
};
let settings;
if (window.innerHeight <= 800 && window.innerWidth <= 800) {
    settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        // className: 'content',
    };
} else {
    settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // className: 'content',
    };
}
const VideoSlidItem = data.map((item) => {
    return (
        <div key={item.id} className="slider_item">
            <img src={item.image} alt="img" className='imgItem'  />
        </div>
    );
});
const TopSLider = () => {

    const {t} = useTranslation()

    // const dispatch = useDispatch()
    //
    // useEffect(() => {
    //     dispatch(changeLanguageAction('FR'))
    // }, [])

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    }

    function showPosition(position) {
        if (position.coords.latitude === TULUZ_LAT && position.coords.longitude === TULUZ_LONG){
            document.querySelector('a').innerHTML = '0532669790'
        }else if (position.coords.latitude === MARSEL_LAT && position.coords.longitude === MARSEL_LONG)
            document.querySelector('a').innerHTML = '033488605401'
    }
    return (
        <>
            {/*<Sliders VideoSlidItem={VideoSlidItem} settings={settings} />*/}
            <div className='slyder'>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://assets-au-01.kc-usercontent.com/9d890525-ffc6-02c9-9bba-11ff94fe0d59/d0b9b19c-c744-403c-b799-563226073fc6/WorkCover_Hero.png?w=1440&h=800" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://previews.123rf.com/images/lightfieldstudios/lightfieldstudios1704/lightfieldstudios170402505/75682422-professional-construction-workers.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://www.safetyandhealthmagazine.com/ext/resources/images/news/construction/workers-comp.jpg?1476213925" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <div className='arrowDiv'><span className="carousel-control-prev-icon downd" aria-hidden="true" /></div>

                    {/*<span className="sr-only" style={{zIndex: 1,color: 'black'}}>Previous</span>*/}
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <div className='arrowDiv'><span className="carousel-control-next-icon downd" aria-hidden="true"></span></div>
                    {/*<span className="sr-only">Next</span>*/}
                </a>
            </div>
            </div>
            <div className="right">
            <h2>{t('we work')} <span className="yellow">{t('24 hours')}</span> {t('a day,')}<br />
                <span className="yellow">{t('7 days')}</span> {t('a week')}</h2>
                <div className="down">
                    <img src={five} alt="f" className="same"/>
                    <a className="num" href="tel:0532669790" onClick={getLocation()}>0532669790</a>
                </div>
            </div>
        </>
    );
};

export default TopSLider;
