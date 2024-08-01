import React from 'react'
import ContentComp from './ContentComp'
import { useTranslation } from 'react-i18next'

const TechnologyComp = () => {
    const {t} = useTranslation()
  return (
    <div data-section="tech" className='h-[100vb] container center flex-col'>

        <h1 className='title'>{t("tech_title")}</h1>
        
        <div data-selection="nav" className='w-full center justify-between lg:p-10 p-2 border-gray-200 border-[1px] rounded-xl'>
            <div data-selection="react" className=' center flex-col gap-2'>
                <img className='aspect-square lg:w-20 w-10 object-contain' src='/assets/react.png'/>
                <span className='font-semibold max-sm:text-sm'>react js</span>
            </div>
            <div data-selection="tailwind" className='center flex-col gap-2'>
                <img className='aspect-square lg:w-20 w-10 object-contain' src='/assets/tailwind.png'/>
                <span className='font-semibold max-sm:text-sm'>tailwind</span>
            </div>
            <div data-selection="laravel" className='center flex-col gap-2'>
                <img className='aspect-square lg:w-20 w-10 object-contain' src='/assets/laravel.png'/>
                <span className='font-semibold max-sm:text-sm'>laravel</span>
            </div>
            <div data-selection="react_native" className='center flex-col gap-2'>
                <img className='aspect-square lg:w-20 w-10 object-contain' src='/assets/reactnative.png'/>
                <span className='font-semibold max-sm:text-sm'>react native</span>
            </div>
        </div>

        <div data-selection="content" className='w-full mt-10'>
            <ContentComp title="react js" content={t('react_content')} data="react"/>
            <ContentComp title="tailwind" content={t('tailwind_content')} data="tailwind"/>
            <ContentComp title="laravel" content={t('laravel_content')} data="laravel"/>
            <ContentComp title="react native" content={t('react_native_content')} data="react_native"/>
        </div>

    </div>
  )
}

export default TechnologyComp