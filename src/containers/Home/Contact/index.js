import React, {useEffect, useState} from "react";
import "./style.css";
import helm from "../../../assets/images/work.png";
import {useTranslation} from "react-i18next";
import head from "../../../assets/images/head.png"
import budge from "../../../assets/images/badge.png"
import bill from "../../../assets/images/bill.png"
import all from "../../../assets/images/all.png"


const Contact = () => {

    return (
        <>
            <h2 className="center">CONTACT <span className="yell">US</span></h2>
            <section className="back" id="contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 imgB">
                            <img src={helm} alt="h" className="helm"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form">
                                <div className="both">
                                    <div className="blue"><img src={head} alt="h" className="head"/></div>
                                    <div className="hundred">Support 24/7</div>
                                </div>
                                <div className="both">
                                    <div className="blue"><img src={budge} alt="h" className="head"/></div>
                                    <div className="hundred">Best Quality</div>
                                </div>
                                <div className="both">
                                    <div className="blue"><img src={bill} alt="h" className="head"/></div>
                                    <div className="hundred">Save money</div>
                                </div>
                                <div className="both">
                                    <div className="blue"><img src={all} alt="h" className="head"/></div>
                                    <div className="hundred">0532669790</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;






