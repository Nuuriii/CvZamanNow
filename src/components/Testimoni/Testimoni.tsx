import ArrowLeft from "/img/ArrowLeft.svg";
import OrangeArrowRight from "/img/OrangeArrowRight.svg";
import Customer from "/img/Customer.svg";

export default function Testimoni() {
   return (
      <div className='pt-8 pb-1 mt-10 bg-green-800 px-7 sm:flex sm:gap-5 sm:items-center lg:mb-16 lg:h-96 sm:pb-8'>
         <div className='relative flex justify-center bottom-20 sm:bottom-0 lg:top-10 sm:w-1/2'>
            <img
               className='h-32 overflow-hidden rounded-md w-28 sm:h-72 lg:h-96 lg:w-96 sm:w-full sm:ring-0 ring-2 ring-white'
               src={Customer}
               alt=''
            />
         </div>
         <div className='relative flex flex-col text-white sm:static bottom-10 gap-y-5 sm:w-1/2'>
            <h3 className='font-semibold lg:text-xl text-amber-400'>
               Testimoni
            </h3>
            <h1 className='text-3xl font-semibold lg:text-4xl'>
               Rygen Maulana
            </h1>
            <h3 className='font-semibold lg:text-xl'>Fullstack Developer</h3>
            <p className='lg:text-lg'>
               “Dengan menggunakan CV Zaman Now, saat ini saya bekerja di
               perusahaan impian dengan mengalahkan 100 pendaftar, Terima kasih
               CV Zaman Now, sangat membantu”
            </p>
            <div className='flex justify-center gap-5 sm:justify-end mt-14'>
               <img
                  className='h-10 px-4 py-2 bg-green-600 rounded-md hover:bg-green-500 ring-2 ring-white'
                  src={ArrowLeft}
                  alt=''
               />
               <img
                  className='h-10 px-4 py-2 bg-green-600 rounded-md ring-2 hover:bg-green-500 ring-white'
                  src={OrangeArrowRight}
                  alt=''
               />
            </div>
         </div>
      </div>
   );
}
