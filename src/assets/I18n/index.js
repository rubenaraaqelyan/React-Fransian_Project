import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import React from "react"

import en from './en'
import ru from './ru'
import fr from './fr.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
        ru: {
            translation: ru
        },
        fr: {
            translation: fr
        }
    },
    lng: 'eng',
    fallbackLng: 'eng',
    interpolation: {
        escapeValue: false
    }
});

export default i18n
