import React from 'react'
import CardComp from './CardComp'
import { useTranslation } from 'react-i18next'

const PortfolioComp = () => {
    const {t} = useTranslation()
  return (
    <div className='container center flex-col'>
        <h1 className='title'>{t("portfolio")}</h1>

        <ul className='w-full flex flex-col gap-y-4'>
            <CardComp domain={"menlmalek.com"} tech={['laravel framework' , 'react js framework & redux' , 'tailwind framework' , 'rest api' , 'mysql']}/>
            <CardComp domain={"naklbadal.site"} tech={['laravel framework' , 'react js framework & redux' , 'tailwind framework' , 'rest api' , 'mysql']}/>
            <CardComp domain={"elhandmade.shop"} tech={['laravel framework' , 'react js framework & redux' , 'tailwind framework' , 'rest api' , 'mysql']}/>
            <CardComp domain={"attendedme.com"} tech={['laravel framework' , 'react js framework & redux' , 'tailwind framework' , 'rest api' , 'mysql']}/>
        </ul>
    </div>
  )
}

export default PortfolioComp