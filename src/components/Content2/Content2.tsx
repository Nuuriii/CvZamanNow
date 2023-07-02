import Image from "/img/Arrow.svg";
import ArrowRight from "/img/ArrowRight.svg";

function Content2() {
   return (
      <div className='flex flex-col items-center py-9 px-7 gap-y-9'>
         <div>
            <img src={Image} alt='' />
         </div>
         <div className='flex flex-col justify-center gap-y-6'>
            <h1 className='text-4xl font-semibold'>
               Ciptakan peluang diterima di perusahaan impian
            </h1>
            <p>
               Buat perbedaan di pasar kerja dengan CV terbaik dari CV Zaman
               Now.
            </p>
            <button className='flex items-center justify-center gap-1 py-3 font-semibold text-white w-44 px-11 bg-amber-500'>
               <span>Selengkapnya</span>
               <img src={ArrowRight} alt='kk' />
            </button>
         </div>
      </div>
   );
}

export default Content2;
