import React from 'react'

const ListComp = ({title , links}) => {
  return (
        <div className='' >
            <h1 className='font-bold lg:text-xl'>{title}</h1>
            <ul className='flex flex-col gap-3 mt-6' data-animate="header_links">
                {
                    links.map((e , index) => (
                        <li key={index} className='' data-link={e.url}><a className='hover:font-bold lg:text-lg font-semibold text-textColor/70 capitalize' >{e.title}</a></li>
                    ))
                }
            </ul>
        </div>
  )
}

export default ListComp