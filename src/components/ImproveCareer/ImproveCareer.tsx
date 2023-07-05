import PaperImage from "/img/Paper.svg";

export default function ImproveCareer() {
   return (
      <div className='pt-10 pb-28 px-7 sm:flex lg:justify-center sm:items-center sm:gap-8'>
         <div className='hidden md:flex lg:justify-center lg:w-1/2'>
            <img className='lg:h-96 lg:w-96' src={PaperImage} alt='' />
         </div>
         <div className='flex flex-col lg:justify-center lg:w-1/2'>
            <div className='py-5'>
               <h1 className='text-3xl font-semibold lg:text-4xl'>
                  Tingkatkan kariermu ke level selanjutnya
               </h1>
            </div>
            <div className='flex flex-col gap-4 '>
               <div className='flex gap-3'>
                  <div className='flex items-start gap-3'>
                     <span className='flex items-center justify-center w-10 h-10 font-bold text-white bg-green-900 rounded-full lg:text-lg'>
                        01
                     </span>
                  </div>
                  <div className='flex flex-col items-start pt-1 gap-y-1'>
                     <h3 className='text-lg font-semibold lg:text-xl text-green-950'>
                        Banyak pilihan template
                     </h3>
                     <p className='lg:text-lg'>
                        Menyediakan berbagai template CV modern dan profesional.
                     </p>
                  </div>
               </div>
               <div className='flex gap-3'>
                  <div className='flex items-start gap-3'>
                     <span className='flex items-center justify-center w-10 h-10 font-bold text-white bg-green-900 rounded-full lg:text-lg'>
                        02
                     </span>
                  </div>
                  <div className='flex flex-col items-start pt-1 gap-y-1'>
                     <h3 className='text-lg font-semibold lg:text-xl text-green-950'>
                        Profil yang selalu up-to-date
                     </h3>
                     <p className='lg:text-lg'>
                        Membantu pengguna untuk mengatur dan memperbarui
                        informasi CV secara mudah.
                     </p>
                  </div>
               </div>
               <div className='flex gap-3'>
                  <div className='flex items-start gap-3'>
                     <span className='flex items-center justify-center w-10 h-10 font-bold text-white bg-green-900 rounded-full lg:text-lg'>
                        03
                     </span>
                  </div>
                  <div className='flex flex-col items-start pt-1 gap-y-1'>
                     <h3 className='text-lg font-semibold lg:text-xl text-green-950'>
                        Mudah Digunakan
                     </h3>
                     <p className='lg:text-lg'>
                        Mempermudah pengguna untuk membuat CV yang menarik dan
                        profesional.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div></div>
      </div>
   );
}
