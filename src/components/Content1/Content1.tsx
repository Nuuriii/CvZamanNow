import Image from "/img/Handphone.svg";

function Content1() {
   return (
      <div className='flex flex-col px-5 py-10 bg-green-700 gap-y-5'>
         <div className='flex flex-col text-white gap-y-5'>
            <h1 className='text-4xl font-bold'>
               Dapatkan Kesempatan{" "}
               <span className='text-amber-400'>Berkarier</span> Lebih Baik.
            </h1>
            <p className='text-md'>
               Dengan menggunakan CV Zaman Now, dapat membantu mewujudkan impian
               Anda untuk diterima di perusahaan favorit.
            </p>
            <button className='px-6 py-3 hover:font-semibold w-28 hover:bg-amber-400 bg-amber-500'>
               Buat CV
            </button>
         </div>
         <div>
            <img src={Image} alt='' />
         </div>
      </div>
   );
}

export default Content1;
