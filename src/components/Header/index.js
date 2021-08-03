import React, {useCallback, useEffect, useMemo, useState} from 'react';
import phone from "../../assets/images/phone.png";
import path48 from "../../assets/images/Path 48.png"
import img1 from "../../assets/images/Path 47.png"
import DropDown from "../DropDown/DropDown";
import circle from "../../assets/images/a.png";
import "./header.css";
import {useTranslation} from "react-i18next";
import {ReactComponent as LOGO } from "../../svg/logo3.svg"


const TULUZ_LAT = 43.604500
const TULUZ_LONG = 1.444000
const MARSEL_LAT = 43.296398
const MARSEL_LONG = 5.370000


const Index =() => {
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


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="all">
                        <img src={img1} alt="a" className="img1"/>
                        <img src={phone} alt="b" className="img2"/>
                        <a className="num" href="tel:0532669790" onClick={getLocation()}>0532669790</a>
                        <img src={path48} alt="c" className="img3"/>
                        <div className={'Select_box'}>
                            <DropDown className="drop" isWhate/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <nav className="navbar navbar-expand-lg ">
                        <a href="/"><LOGO className='logo' /></a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
            <span className="navbar-toggler-icon">
              <i className="fa fa-bars"></i>
            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link hov" href={"/#about"}>
                                        {t('About')}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hov" href={"/#service"}>
                                        {t('Service')}
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link hov" href={"/#contacts"}>
                                        {t('Contacts')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Index;




