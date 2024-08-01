import React from 'react'

const ContentComp = ({data , title , content}) => {
  return (
        <div data-selection={data} style={{display:"none"}} className='w-full border-gray-200 border-[1px] rounded-xl shadow p-6 flex flex-col gap-6'>
            <h1 className='text-center font-bold text-lg capitalize'>{title}</h1>
            <p className='max-sm:text-sm text-textColor/70 font-semibold'>{content}</p>
        </div>
  )
}

export default ContentComp