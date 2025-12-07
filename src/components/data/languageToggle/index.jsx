import React from 'react'
import CustomButton from '../../inputs/customButton';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
    const { i18n } = useTranslation();

    const switchLang = () => {
        const newLang = i18n.language === "en" ? "ar" : "en";
        i18n.changeLanguage(newLang);
    };

    return (
        <CustomButton
            variant="transparent"
            color="black"
            size="lg"
            padding="0"
            onClick={switchLang}>
            <span>{i18n.language === "en" ? "العربية" : "English"}</span>
        </CustomButton>
    );
}

export default LanguageToggle