import React from "react";
import worker from "../../../assets/images/1.png";
import "./style.css"
import {useTranslation} from "react-i18next";

const Team = () => {
    const {t} = useTranslation()
    return(
        <div className="new" id="about">
            <div className="first">
                 <h3 className="middle">{t('OUR')} <span className="our">{t('TEAM')}</span></h3>
                <p className="p">{t('Intervention Urgence 24/7 Is An Emergency Company, Offering Highly Qualified Services (Plubmers, Electicians, Boilers Or Locksmiths) For Individuals, Offices And Businesses.')}</p>
            </div>
            <div className="second">
                <div>
                    <img src={worker} alt="w" className="worker"/>
                </div>
            </div>
        </div>
    )
}

export default Team;
