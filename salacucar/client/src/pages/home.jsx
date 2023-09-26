import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import sal from "../assets/logos/sal.png"
import flyer1 from "../assets/logos/flyer1.png"
import flyer2 from "../assets/logos/flyer2.png"
import "./css/home.css"




function HomePage() {
    const navigate = useNavigate();

    const { t } = useTranslation()
    const [image, setImage] = useState(sal)
    const [currentIndex, setCurrentIndex] = useState(0)
    const imageSlider = [sal, flyer1, flyer2]

    function Sliding(direction) {
        if (direction === "next") {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSlider.length);
        } else if (direction === "previous") {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + imageSlider.length) % imageSlider.length);
        }
    }
    useEffect(() => {
        setImage(imageSlider[currentIndex]);
    }, [currentIndex]);



    return (
        <div className="home-page">
            <div className="home-page-top">
                <p className="home-page-top-title">{t("home.topTitle")}</p>
                <p className="home-page-top-subtitle">{t("home.topSubTitle")}</p>
                <div className="home-page-logo">
                    <img src={image} alt="sal" />
                    <button onClick={() => Sliding("previous")}>Anterior</button>
                    <button onClick={() => Sliding("next")}>Seguinte</button>
                </div>
            </div>
            <div className="home-page-bot">
                <p className="home-page-bot-subtitle">{t("home.aboutUs")}</p>
            </div>
        </div>
    )
}

export default HomePage