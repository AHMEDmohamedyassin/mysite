import React from 'react'
import { useTranslation } from 'react-i18next'

const SideMenuComp = () => {
    const {t} = useTranslation()
  return (
    <div className='side_menu hidden fixed top-0 left-0 w-full h-full bg-black/20'>
        <div data-animate="side_menue" className='fixed top-0 -right-[500px] w-3/4 max-w-[500px] h-full bg-bgColor z-20 lg:px-10 py-10 px-4 overflow-hidden'>
            <span data-animate="close_side_menu" className="material-symbols-outlined cursor-pointer font-bold text-gray-500 hover:text-gray-500/80">close</span>

            {/* links */}
            <ul data-animate="header_links" className='flex flex-col'>
                <li data-link="home" className='py-4 border-b-gray-200 border-b-[2px] hover:active_link cursor-pointer'>
                    <a className='font-bold text-sm uppercase'>{t("home")}</a>
                </li>
                <li data-link="about" className='py-4 border-b-gray-200 border-b-[2px] hover:active_link cursor-pointer'>
                    <a className='font-bold text-sm uppercase'>{t("about")}</a>
                </li>
                <li data-link="services" className='py-4 border-b-gray-200 border-b-[2px] hover:active_link cursor-pointer'>
                    <a className='font-bold text-sm uppercase'>{t("services")}</a>
                </li>
                <li data-link="contact" className='py-4 border-b-gray-200 border-b-[2px] hover:active_link cursor-pointer'>
                    <a className='font-bold text-sm uppercase'>{t("contact")}</a>
                </li>
                <li data-link="tech" className='py-4 border-b-gray-200 border-b-[2px] hover:active_link cursor-pointer'>
                    <a className='font-bold text-sm uppercase'>{t("technologies")}</a>
                </li>
                <li data-link="pricing" className='py-4 border-b-gray-200 border-b-[2px] hover:active_link cursor-pointer'>
                    <a className='font-bold text-sm uppercase'>{t("pricing")}</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideMenuComp