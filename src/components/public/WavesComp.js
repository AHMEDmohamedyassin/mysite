import React from 'react'

const WavesComp = () => {
  return (
    <>
        {/* waves */}

        {/* bottom wave */}
        {/* <div className='absolute w-full -bottom-24 right-0 -z-10 max-sm:scale-[200%] max-sm:top-10 max-sm:left-20'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eef8ff" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,229.3C384,256,480,224,576,181.3C672,139,768,85,864,74.7C960,64,1056,96,1152,112C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div> */}

        {/* upper wave */}
        {/* <div className='absolute w-full top-0 left-0 -z-10 scale-[200%]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eef8ff" fill-opacity="1" d="M0,320L40,314.7C80,309,160,299,240,293.3C320,288,400,288,480,282.7C560,277,640,267,720,229.3C800,192,880,128,960,96C1040,64,1120,64,1200,101.3C1280,139,1360,213,1400,250.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div> */}


        <div className='-z-10 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full center flex-col max-sm:scale-[300%] max-sm:-rotate-45 max-xl:-rotate-[20deg] max-xl:scale-[115%]'>
          {/* upper wave */}
          <div className=' w-full'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eef8ff" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,85.3C672,53,768,43,864,48C960,53,1056,75,1152,101.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </div>

          {/* bottom wave */}
          <div className=' w-full'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eef8ff" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,229.3C384,256,480,224,576,181.3C672,139,768,85,864,74.7C960,64,1056,96,1152,112C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
          </div>

        </div>
    </>
  )
}

export default WavesComp