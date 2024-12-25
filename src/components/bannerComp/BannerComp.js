import React from 'react'
import { useTranslation } from 'react-i18next'
import WavesComp from '../public/WavesComp'

const BannerComp = () => {
    const {t} = useTranslation()
  return (
    <div data-section="home" className='container relative sm:pt-20  h-[100vb] center sm:justify-between max-sm:flex-col-reverse overflow-hidden gap-10'>
        
        {/* waves comp */}
        <WavesComp/>

        {/* content */}
        <div className='lg:w-1/3 sm:w-2/4 w-full max-sm:center flex flex-col lg:gap-y-10 gap-y-6'>
            <h1 className='lg:text-5xl sm:text-3xl text-xl font-bold capitalize lg:leading-[70px] sm:leading-[40px] leading-[30px]'>{t('we build software for your')} <span className='text-mainColor capitalize'>{t('business')}</span></h1>
            <p className='capitalize lg:text-lg max-sm:text-xs font-semibold'>{t('we make web apps and mobile apps for you')}</p>
            <button data-link="services" className='mainButton'>{t('discover now')}</button>
        </div>

        <div className='sm:w-2/4 rounded-full overflow-hidden' style={{scale:0.9}}>
            <img src='/icons/logo.png' className='h-full w-full object-cover' />
        </div>
    </div>
  )
}

export default BannerComp