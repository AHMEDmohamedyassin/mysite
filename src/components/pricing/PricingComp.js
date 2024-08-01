import React from 'react'
import WavesComp from '../public/WavesComp'
import CardComp from './CardComp'
import { useTranslation } from 'react-i18next'

const PricingComp = () => {
  const {t} = useTranslation()
  return (
    <div data-section="pricing" className='xl:h-[100vb] relative container center flex-col overflow-hidden'>

        {/* waves  */}
        <WavesComp/>

        <h1 className='title'>{t("Pricing for our services")}</h1>

        <div className='w-full grid xl:grid-cols-4 sm:grid-cols-2 gap-6'>
            {/* card */}
            <CardComp title={t('web application')} desc={t("web_pricing_content")} img={'/assets/web.png'} price={149.98} discount={200} />
            <CardComp title={t('android application')} desc={t("android_pricing_content")} img={'/assets/web.png'} price={99.98} discount={150} />
            <CardComp title={t('ios application')} desc={t("ios_pricing_content")} img={'/assets/web.png'} price={199.98} discount={250} />
            <CardComp title={t('website with ios & android app')} desc={t("web_mobile_pricing_content")} img={'/assets/web.png'} price={299.98} discount={350} />
        </div>
    </div>
  )
}

export default PricingComp