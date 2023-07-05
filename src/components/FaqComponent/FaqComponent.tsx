import ArrowUp from "/img/ArrowUp.svg";
import ArrowDown from "/img/ArrowDown.svg";

export default function FaqComponent() {
   return (
      <div className='flex flex-col justify-center py-20 lg:px-16 px-7 md:flex-row md:items-start'>
         <div className='flex flex-col gap-y-1 md:w-1/2 '>
            <h1 className='text-2xl font-bold lg:text-4xl'>
               Pertanyaan yang sering diajukan
            </h1>

            <p className='lg:text-lg'>
               Ada pertanyaan? Kami di sini untuk membantu Anda.
            </p>
         </div>
         <div className='flex flex-col py-5 md:py-0 md:w-1/2 md:justify-center'>
            <div className='py-2 border-b-2 border-gray-400 lg:pt-3 lg:pb-5'>
               <div className='flex items-center justify-between pb-2'>
                  <h3 className='text-lg font-medium lg:text-xl'>
                     Apakah informasi saya dalam CV aman?
                  </h3>
                  <img src={ArrowUp} alt='' />
               </div>
               <p className='text-justify text-gray-900 lg:text-lg'>
                  <em>
                     Ya, informasi yang Anda masukkan ke dalam CV di CV Zaman
                     Now akan dijaga kerahasiaannya. Kami tidak akan membagikan
                     informasi tersebut kepada pihak lain tanpa persetujuan
                     Anda.
                  </em>
               </p>
            </div>
            <div className='py-2 border-b-2 border-gray-400 lg:py-4'>
               <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-medium lg:text-xl'>
                     Apakah saya bisa mengedit CV?
                  </h3>
                  <img src={ArrowDown} alt='' />
               </div>
               <p className='text-justify'></p>
            </div>
            <div className='py-2 border-b-2 border-gray-400 lg:py-4'>
               <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-medium lg:text-xl'>
                     Bagaimana cara mengunduh CV?
                  </h3>
                  <img src={ArrowDown} alt='' />
               </div>
               <p className='text-justify'></p>
            </div>
            <div className='py-2 lg:py-4'>
               <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-medium lg:text-xl'>
                     Apa saja yang perlu saya siapkan?
                  </h3>
                  <img src={ArrowDown} alt='' />
               </div>
               <p className='text-justify'></p>
            </div>
         </div>
      </div>
   );
}
