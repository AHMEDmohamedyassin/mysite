import React from 'react'
import WavesComp from '../public/WavesComp'
import { useTranslation } from 'react-i18next'

const ContactComp = () => {
    const {t} = useTranslation()
  return (
    <div data-section="contact" className='h-[100vb] relative container flex flex-col items-center overflow-hidden'>
        {/* wave comp */}
        <WavesComp/>

        <h1 className='title'>{t("get in touch")}</h1>

        <div className='w-full grid lg:grid-cols-3 max-lg:gap-10'>

            <div className='lg:justify-self-center'>
                <h1 className='lg:font-bold '>{t('social media')} :</h1>
                <ul className='flex flex-col gap-4 mt-8'>
                    <li className='w-fit center gap-4 hover:cursor-pointer hover:text-mainColor lg:font-semibold hover:font-bold'><span className="material-symbols-outlined">mail</span><a href='mailto:ahmedmohamed982025@outlook.com'>ahmedmohamed982025@outlook.com</a></li>
                    <li className='w-fit center gap-4 hover:cursor-pointer hover:text-mainColor lg:font-semibold hover:font-bold'><img src='/assets/youtube.png' className='aspect-square w-6' /><a target='_blank' href='https://www.youtube.com/@user-ph3xn7di4o'>{t("visit my youtube channel")}</a></li>
                </ul>
            </div>

            <div className='lg:justify-self-center'>
                <h1 className='lg:font-bold '>{t('phone numbers')} :</h1>
                <ul className='flex flex-col gap-4 mt-8'>
                    <li className='w-fit center gap-4 hover:cursor-pointer hover:text-mainColor lg:font-semibold hover:font-bold'><span className="material-symbols-outlined">call</span><a href='tel:00201066404523'>00201066404523</a></li>
                </ul>
            </div>

            <div className='lg:justify-self-center'>
                <h1 className='lg:font-bold '>{t('whatsapp numbers')} :</h1>
                <ul className='flex flex-col gap-4 mt-8'>
                    <li className='w-fit center gap-4 hover:cursor-pointer hover:text-mainColor lg:font-semibold hover:font-bold'><img src='/assets/whatsapp.png' className='aspect-square w-6'/><a target='_blank' href='https://wa.me/201066404523?text=Hello'>00201066404523</a></li>
                </ul>
            </div>


        </div>
    </div>
  )
}

export default ContactComp