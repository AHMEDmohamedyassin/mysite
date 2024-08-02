import React from 'react'
import { useTranslation } from 'react-i18next'

const CardComp = ({domain , tech}) => {
    const {t} = useTranslation()
  return (
    <li>
        <a target='_blank' href={`https://${domain}`} className='w-full flex lg:items-center max-lg:flex-col gap-4 border-gray-200 border-[1px] p-4 rounded shadow'>
            <h2 className='font-bold text-blue-500'>{domain} : </h2>
            <span className='text-textColor/50 lg:text-sm text-xs'>({t("used technologies")})</span>
            <ul className='uppercase flex flex-wrap gap-4'>
                {
                    tech?.map((e , index) => (
                        <li key={index} className={`max-lg:text-sm ${index % 2 ? "font-bold text-blue-800" : "font-bold"}`}>
                            {e}  
                            {
                                index < tech.length - 1 ? 
                                <span className='ms-4 max-lg:hidden'>,</span> : null
                            }
                        </li>
                    ))
                }
            </ul>
        </a>
    </li>
  )
}

export default CardComp