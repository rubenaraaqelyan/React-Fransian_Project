import React from "react"
import "./footer.css"
import inter from "../../assets/images/inter.png"
import tel from "../../assets/images/phon.png"
import fc from "../../assets/images/fcb.png";
import ins from "../../assets/images/ins.png";
import twt from "../../assets/images/twt.png";
import yut from "../../assets/images/ytb.png";
import {useTranslation} from "react-i18next";
import {ReactComponent as LOGO} from "../../svg/logo3.svg";
import {Link} from "react-router-dom";
import Terms from "../../containers/Home/Terms";


const TULUZ_LAT = 43.604500
const TULUZ_LONG = 1.444000
const MARSEL_LAT = 43.296398
const MARSEL_LONG = 5.370000


const Footer =()=>{
    const {t} = useTranslation()


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
    return(
        <>
        <div className='footer'>
            <div className="block1">
                <div className='blockDiv'>
                    <LOGO className='logo2' />
                    <p>{t('Intervention 24/7')}</p>
                </div>
                <div className='blockDiv'>
                    <img src={tel} alt="tel"/>
                    <a className="num5" href="tel:0532669790" onClick={getLocation()}>0532669790</a>
                </div>
            </div>
            <p className='block2'>
                {t('all-rights-reserved By ArmCoding.')}
            </p>
            <div className='iconDiv'>
                <img src={fc} alt="fc"/>
                <img src={ins} alt="ins"/>
                <img src={twt} alt="twt"/>
                <img src={yut} alt="yut"/>
            </div>
        </div>
            <div className="dof">
                <a href="/terms-and-conditions">terms-and-conditions</a>
                <a href="/privacy-policy">privacy-policy</a>
                <a href="/cookie-policy">cookie-policy</a>
                <a href="/code-de-conduite">code-de-conduite</a>
                <span className="rg">info@intervention-urgence24-7.com</span>
            </div>
            </>
    )
}
export default Footer
