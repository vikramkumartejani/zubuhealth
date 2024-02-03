import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <div className='bg-dark_green md:px-10 px-4 md:pt-20 pt-10 w-full m-auto text-center'>
        <h3 className='font-medium text-3xl md:text-5xl text-white mb-4 leading-[3rem]'>Empower Your Health Insurance Sales with</h3>
        <div className='mb-4'>
            <h2 className='md:text-6xl sm:text-4xl text-2xl	text-white md:my-10 my-6'>
            <span className="ml-4 relative w-full border-2 border-green_300 py-1 px-6 rounded-md bg-green_500">
          <span className="h-full rounded absolute bg-green_300 top-0 left-0 min-w-3 flex justify-center items-center">
            <span className="bg-white min-w-[3px] h-10"></span>
          </span>
          Zubu Health CRM
          <span className="h-full rounded absolute bg-green_300 top-0 right-0 min-w-3 flex justify-center items-center">
            <span className="bg-white min-w-[3px] h-10"></span>
          </span>
        </span>
            </h2>
        </div>
        <h4 className='sm:text-2xl text-lg font-normal text-white mb-5'>Streamline operations, engage better, and boost sales</h4>
        <div className='flex flex-wrap items-center gap-4 justify-center mb-16'>
            <button className='bg-green rounded-3xl text-base font-medium py-2.5 px-5 text-dark_green_100'>SIGN UP FOR FREE TRIAL</button>
            <button className='border border-white rounded-3xl text-base font-medium py-2.5 px-5 text-white'>GET STARTED IN MINUTES</button>
        </div>
           <div className='relative'>
             <Image src='/assets/Hero.svg' alt='Image' width={1024} height={479} className='max-w-5xl w-full h-auto m-auto'/>
          </div>
     </div>
  )
}

export default Hero;