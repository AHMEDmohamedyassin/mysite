import React from 'react'
import { useTranslation } from 'react-i18next'
import { handlePageLanguageChange } from '../../functions/i18next/i18next'
import SideMenuComp from './SideMenuComp'

const HeaderComp = () => {
    const {i18n , t} = useTranslation()

    const handleChangeLanguage = (lang) => {
        localStorage.setItem('language' , lang)
        i18n.changeLanguage(lang)
        handlePageLanguageChange()
    }

  return (
    <div data-animate="header" className='page_header container flex items-center justify-between py-6 max-sm:bg-bgColor max-sm:border-b-[1px] max-sm:border-gray-200 max-sm:shadow fixed z-10'>
        
        {/* progress bar */}
        <div data-animate="header_progress_bar" className='fixed top-0 left-0 w-0 h-[4px] bg-mainColor'></div>
        
        
        <div className='center gap-10'>
            {/* logo */}
            <div className='font-extrabold text-mainColor -my-20'>
                <img src='/icons/logo.png' className='h-10'/>
            </div>

            {/* urls  */}
            <ul data-animate="header_links" className='hidden lg:flex gap-8'>
                <li data-link="home" className='active_link hover:active_link'>
                    <a className=' font-bold text-sm uppercase'>{t("home")}</a>
                </li>
                <li data-link="about" className=' hover:active_link'>
                    <a className='font-bold text-sm uppercase'>{t("about")}</a>
                </li>
                <li data-link="services" className=' hover:active_link'>
                    <a className='font-bold text-sm uppercase'>{t("services")}</a>
                </li>
                <li data-link="contact" className=' hover:active_link'>
                    <a className='font-bold text-sm uppercase'>{t("contact")}</a>
                </li>
                <li data-link="tech" className=' hover:active_link'>
                    <a className='font-bold text-sm uppercase'>{t("technologies")}</a>
                </li>
                <li data-link="pricing" className=' hover:active_link'>
                    <a className='font-bold text-sm uppercase'>{t("pricing")}</a>
                </li>
            </ul>
        </div>

        {/* icons */}
        <div className='center gap-8'>
            <div className='-my-10 center gap-2'>
                {
                    i18n.language == 'ar' ? 
                    <button onClick={() => handleChangeLanguage('en')} className='font-bold'>English</button>
                    :<button onClick={() => handleChangeLanguage('ar')} className='font-bold'>عربي</button>
                }
            </div>

            {/* menu button */}
            <span data-animate="open_side_menu" className="material-symbols-outlined cursor-pointer">menu</span>
        </div>

        {/* side menu */}
        <SideMenuComp/>
    </div>
  )
}

export default HeaderComp