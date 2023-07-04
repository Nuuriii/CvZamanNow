import UpImage from "/img/Up.svg";
import ArrowRight from "/img/ArrowRight.svg";

export default function Interesting() {
   return (
      <div className='flex flex-col items-center justify-center py-8 lg:pt-4 lg:pb-3 sm:gap-10 px-7 gap-y-10 sm:flex-row'>
         <div className='flex flex-col justify-center gap-y-5 lg:w-1/2'>
            <h1 className='text-4xl font-semibold lg:text-5xl'>
               Buat CV dengan template menarik
            </h1>
            <p className='lg:text-lg'>
               Kami menyediakan berbagai template modern dan dapat disesuaikan
               dengan kebutuhanmu.
            </p>
            <button className='flex items-center justify-center w-32 gap-1 py-3 font-semibold text-white px-11 bg-amber-500 hover:bg-amber-400 '>
               <span>Telusuri</span>
               <img src={ArrowRight} alt='kk' />
            </button>
         </div>
         <div className='flex justify-center'>
            <img className='lg:h-96 lg:w-96' src={UpImage} alt='' />
         </div>
      </div>
   );
}
