import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./css/home.css"




function HomePage() {

    const { t } = useTranslation()

    return (
        <div className="home-page">
            <div className="home-page-top">
                <p className="home-page-top-title">{t("home.topTitle")}</p>
                <p className="home-page-top-subtitle">{t("home.topSubTitle")}</p>
                <img src="" alt="" />
            </div>
            <div className="home-page-bot">
                <p className="home-page-bot-subtitle">{t("home.aboutUs")}</p>
            </div>
        </div>
    )
}

export default HomePage