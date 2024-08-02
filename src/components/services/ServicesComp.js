import React from 'react'
import { useTranslation } from 'react-i18next'

const ServicesComp = () => {
    const {t} = useTranslation()
  return (
    <div data-section="services" className='container lg:h-[100vb] center flex-col overflow-hidden'>
        <h1 className='title'>{t('services_title')}</h1>

        <div className='grid lg:grid-cols-3'>
            
            <div data-link="pricing" data-animate="services" className='relative left-[2000px] w-full center flex-col gap-8 sm:px-10 px-4 py-16 rounded-xl hover:shadow-lg hover:shadow-mainColor/30 hover:border-b-mainColor border-b-transparent border-b-4 hover:scale-105 hover:cursor-pointer'>
                <span className="material-symbols-outlined text-4xl sm:p-6 p-4 rounded-full bg-green-200/40 text-green-400 w-fit">language</span>
                <h1 className='sm:text-2xl text-xl font-semibold capitalize text-center'>{t('web development')}</h1>
                <p className='text-center max-sm:text-sm text-mainText/70 font-semibold capitalize text-textColor/70'>{t('web_content')}</p>
            </div>

            <div data-link="pricing" data-animate="services" className='relative left-[2000px] w-full center flex-col gap-8 sm:px-10 px-4 py-16 rounded-xl hover:shadow-lg hover:shadow-mainColor/30 hover:border-b-mainColor border-b-transparent border-b-4 hover:scale-105 hover:cursor-pointer'>
                <span className="material-symbols-outlined text-4xl sm:p-6 p-4 rounded-full bg-green-200/40 text-green-400 w-fit">smartphone</span>
                <h1 className='sm:text-2xl text-xl font-semibold capitalize text-center'>{t('app development')}</h1>
                <p className='text-center max-sm:text-sm text-mainText/70 font-semibold capitalize text-textColor/70'>{t('app_content')}</p>
            </div>

            <div data-link="pricing" data-animate="services" className='relative left-[2000px] w-full center flex-col gap-8 sm:px-10 px-4 py-16 rounded-xl hover:shadow-lg hover:shadow-mainColor/30 hover:border-b-mainColor border-b-transparent border-b-4 hover:scale-105 hover:cursor-pointer'>
                <span className="material-symbols-outlined text-4xl sm:p-6 p-4 rounded-full bg-green-200/40 text-green-400 w-fit">draw</span>
                <h1 className='sm:text-2xl text-xl font-semibold capitalize text-center'>{t('design services')}</h1>
                <p className='text-center max-sm:text-sm text-mainText/70 font-semibold capitalize text-textColor/70'>{t('design_content')}</p>
            </div>

        </div>
    </div>
  )
}

export default ServicesComp