import React from 'react'
import WavesComp from '../public/WavesComp'
import { useTranslation } from 'react-i18next'

const AboutComp = () => {
  const {t} = useTranslation()

  return (
    <div data-section="about" className='h-[100vb] container relative grid sm:grid-cols-2 items-center justify-center xl:gap-x-80 overflow-hidden'>
        {/* waves comp */}
        <WavesComp/>

        {/* content */}
        <div className='flex flex-col gap-12'>
            <h1 className='title'>{t('about_title')}</h1>
            <p className='lg:text-xl max-sm:text-sm font-semibold text-textColor/70 lg:leading-[40px]'>{t('about_content')}</p>
            <button data-link="services" className='mainButton'>{t('learn more')}</button>
        </div>

        {/* image */}
        <div>
            <img src='/icons/SVG/svg3.svg' style={{display:"none"}} className='h-full w-full object-cover mt-4'/>
        </div>
    </div>
  )
}

export default AboutComp