import React from "react";
import "./style.css";
import mask from "../../../assets/images/mask.png";
import {useTranslation} from "react-i18next";



const About = () => {
    const {t} = useTranslation()

    return(
        <div className="about">
            <div className="call">
                <h4 className="us">{t('You can call us')}</h4>
                <p className="zero">Phone: 0532669790</p>
                <p className="zero">Notre adresse e-mail</p>
                <p className="zero">info@intervention-urgence24-7.com</p>
            </div>
                <img src={mask} alt="m" className="mask"/>
        </div>
    )
}


export default About;
