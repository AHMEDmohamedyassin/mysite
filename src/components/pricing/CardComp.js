import React from 'react'

const CardComp = ({title , desc , price , discount , img}) => {
  return (
            <div data-link="contact" data-animate="pricing" className='relative left-[2000px] bg-bgColor center flex-col justify-between gap-4 border-gray-200 border-[1px] shadow hover:shadow-mainColor/20 hover:shadow-lg hover:scale-105 rounded-lg p-6'>
                <div className='center flex-col gap-4'>
                    <div className='center bg-mainColor/20 rounded-full p-3'>
                        <img className='aspect-square w-12 object-contain' src={img} />
                    </div>

                    <h1 className='capitalize font-semibold text-center'>{title}</h1>

                </div>

                <p className='text-textColor/70 text-center overflow-hidden '>{desc}</p>

                {/* pricing  */}
                <div className='center gap-4 items-end'>
                    {/* price */}
                    <div className='center gap-1'>
                        <span className='font-bold text-3xl'>{price}</span>
                        <span className='text-lg font-semibold'>$</span>
                    </div>
                    {/* discount */}
                    {
                        discount ? (
                            <>
                                <div className='text-textColor/30 relative center gap-1'>
                                    <span className='font-bold text-xl'>{discount}</span>
                                    <span className='font-semibold'>$</span>
                                    <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-10 h-[2px] bg-gray-500/50 rounded rotate-45'></span>
                                </div>
                            </>
                        ) : null
                    }
                </div>

            </div>
  )
}

export default CardComp