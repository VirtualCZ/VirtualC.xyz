import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="mt-5">
            <p className="mb-1 fs-5 text-center">TOMÁŠ GABRIEL</p>
            <div className="d-flex justify-content-center">
                <p className="dev mb-2 fs-5 text-center">{t('footer.text')}</p>
            </div>
        </footer>
    )
}
export default Footer