import Image from "/img/Arrow.svg";
import ArrowRight from "/img/ArrowRight.svg";

function Content2() {
   return (
      <div className='flex flex-col items-center justify-center sm:flex-row sm:gap-8 py-9 px-7 gap-y-9 lg:py-10'>
         <div className='flex justify-center lg:w-1/2'>
            <img className='lg:h-96 lg:w-96' src={Image} alt='' />
         </div>
         <div className='flex flex-col justify-center lg:w-1/2 gap-y-6 '>
            <h1 className='text-4xl font-semibold lg:text-5xl '>
               Ciptakan peluang diterima di perusahaan impian
            </h1>
            <p className='lg:text-lg'>
               Buat perbedaan di pasar kerja dengan CV terbaik dari CV Zaman
               Now.
            </p>
            <button className='flex items-center justify-center gap-1 py-3 font-semibold text-white w-44 px-11 bg-amber-500'>
               <span>Selengkanya</span>
               <img src={ArrowRight} alt='kk' />
            </button>
         </div>
      </div>
   );
}

export default Content2;
