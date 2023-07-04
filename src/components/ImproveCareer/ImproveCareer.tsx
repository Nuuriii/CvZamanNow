import UpImage from "/img/Up.svg";
import ArrowRight from "/img/ArrowRight.svg";

export default function ImproveCareer() {
   return (
      <div className='container py-8 px-7'>
         <div className='flex flex-col gap-y-5'>
            <h1 className='text-4xl font-semibold'>
               Buat CV dengan template menarik
            </h1>
            <p>
               Kami menyediakan berbagai template modern dan dapat disesuaikan
               dengan kebutuhanmu.
            </p>
            <button className='flex items-center justify-center w-32 gap-1 py-3 font-semibold text-white px-11 bg-amber-500 hover:bg-amber-400 '>
               <span>Telusuri</span>
               <img src={ArrowRight} alt='kk' />
            </button>
         </div>
         <div>
            <img src={UpImage} alt='' />
         </div>
      </div>
   );
}
