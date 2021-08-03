import React from "react";
import "./style.css";
import hard from "../../../assets/images/worker-2.png"
import tool from "../../../assets/images/tool.png"
import tools from "../../../assets/images/Group 30.png"
import newTool from "../../../assets/images/Group 32.png"
import newTool2 from "../../../assets/images/Group 31.png"
import {useTranslation} from "react-i18next";

const Service = () => {
    const {t} = useTranslation()
    return (
        <>
            <h2 className="easy" id="service"><span className="yel">{t('OUR')}</span> {t('SERVICE')}</h2>
            <div className="service">
                <div className="blocks">
                    <div className="flex">
                        <div className="drift">
                            <img src={tool} alt="t" className="alt"/>
                            <div className="around">
                            <span><strong>{t('Electricians')} </strong></span><br />
                            <span className="self">{t('Intervention Urgence 24/7 Is An Emergency Company, Offering')} </span>
                            </div>
                        </div>
                        <div className="drift">
                            <img src={tools} alt="tl" className="alt"/>
                            <div className="around">
                                <span><strong>{t('Plumber')}</strong></span><br />
                            <span className="self">{t('Intervention Urgence 24/7 Is An Emergency Company, Offering')} </span>
                            </div>
                        </div>

                    </div>
                    <div className="flex">
                        <div className="drift">
                            <img src={newTool} alt="t" className="alt"/>
                            <div className="around">
                                <span><strong>{t('Boiler Repair And ')}<br />{t('Installation')}</strong></span><br />
                                <span className="self">{t('Intervention Urgence 24/7 Is An Emergency Company, Offering')} </span>
                            </div>
                        </div>
                        <div className="drift">
                            <img src={newTool2} alt="tl" className="alt"/>
                            <div className="around">
                                <span><strong>{t('Lock Repair And Installation,Locksmith')}</strong></span><br />
                                <span className="self">{t('Intervention Urgence 24/7 Is An Emergency Company, Offering')}</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="image">
                    <img src={hard} alt="h" className="hard"/>
                </div>
            </div>
        </>
    )
}

export default Service;
