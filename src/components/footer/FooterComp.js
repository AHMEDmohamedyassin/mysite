import React from 'react'
import ListComp from './ListComp'
import { useTranslation } from 'react-i18next'

const FooterComp = () => {
    const {t} = useTranslation()
  return (
    <div className='footer relative container center flex-col pb-4 overflow-hidden'>

        <div className='w-full absolute max-xl:bottom-20 bottom-0 left-0 -z-10 max-xl:scale-[300%]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eef8ff" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,85.3C672,53,768,43,864,48C960,53,1056,75,1152,101.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        
        <div className='w-full grid lg:grid-cols-3 mb-10 gap-10'>
            <ListComp title={t('links')} links={[
                {title:t('home') , url : 'home'},
                {title:t('about us') , url : 'about'},
                {title:t('contact us') , url : 'contact'},
                {title:t('services') , url : 'services'},
                {title:t('pricing') , url : 'pricing'},
                {title:t('used technology') , url : 'tech'},
            ]} />
            <ListComp title={t('services')} links={[
                {title:t('web development') , url : 'services'},
                {title:t('app development') , url : 'services'},
                {title:t('design services') , url : 'services'},
            ]} />
            <ListComp title={t('technology')} links={[
                {title:'React js' , url : 'tech'},
                {title:'Laravel' , url : 'tech'},
                {title:'Tailwind' , url : 'tech'},
                {title:'React Native' , url : 'tech'},
                {title:'API' , url : 'tech'},
            ]} />
        </div>

        <img src='/icons/SVG/svg.svg' className='w-10' />

        <div className='capitalize font-bold text-textColor/50 center'>{t("copyright")} {t("reserved")} <span className='text-2xl ms-1'>&copy;</span>2024 </div>
    </div>
  )
}

export default FooterComp