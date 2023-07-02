import Image from "/img/Handphone.svg";

function Content1() {
   return (
      <div className='flex flex-col items-center justify-center py-10 bg-green-700 px-7 lg:h-full sm:flex-row gap-y-5'>
         <div className='flex flex-col justify-center text-white gap-y-5 lg:gap-y-9 lg:w-1/2'>
            <h1 className='text-4xl font-bold lg:text-5xl'>
               Dapatkan Kesempatan{" "}
               <span className='text-amber-400'>Berkarier</span> Lebih Baik.
            </h1>
            <p className='text-md lg:text-xl'>
               Dengan menggunakan CV Zaman Now, dapat membantu mewujudkan impian
               Anda untuk diterima di perusahaan favorit.
            </p>
            <button className='px-6 py-3 lg:mt-20 hover:font-semibold w-28 hover:bg-amber-400 bg-amber-500'>
               Buat CV
            </button>
         </div>
         <div className='lg:w-1/2'>
            <img src={Image} alt='' />
         </div>
      </div>
   );
}

export default Content1;
