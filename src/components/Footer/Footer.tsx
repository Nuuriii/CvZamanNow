import Icon from "/img/Icon.svg";
import { Link } from "react-router-dom";
import Instagram from "/img/Instagram.svg";
import Twitter from "/img/Twitter.svg";
import Facebook from "/img/Facebook.svg";

export default function Footer() {
   return (
      <div className='bg-green-800 px-7'>
         <div className='flex flex-col text-white py-7 md:flex-row md:items-center md:justify-between gap-y-7'>
            <div className='flex flex-col gap-y-2 py-9 md:w-1/2'>
               <div className='pb-5'>
                  <img src={Icon} alt='' />
               </div>
               <p className='py-0 lg:text-lg'>
                  Memudahkan Anda menuju perusahaan impian dengan menggunakan CV
                  yang efektif dan efisien
               </p>
               <div className='flex flex-col lg:text-lg'>
                  <p className='font-bold'>Question or feedback ?</p>
                  <p>we’d love to hear from you</p>
               </div>
            </div>
            <div className='flex flex-col justify-center md:gap-y-12 gap-y-4 md:h-full md:justify-between'>
               <div className='flex justify-center gap-8'>
                  <div className='flex flex-col items-center lg:text-lg'>
                     <h2 className='font-bold'>Perusahaan</h2>
                     <Link to={""}>Tentang Kami</Link>
                  </div>
                  <div className='flex flex-col items-center lg:text-lg'>
                     <h2 className='font-bold '>Pusat bantuan</h2>
                     <Link to={""}>FAQ</Link>
                  </div>
               </div>
               <div className='flex justify-center gap-6'>
                  <img
                     className='p-1 rounded-full w-9 h-9 ring-2 ring-white'
                     src={Instagram}
                     alt=''
                  />
                  <img
                     className='p-1 rounded-full w-9 h-9 ring-2 ring-white'
                     src={Facebook}
                     alt=''
                  />
                  <img
                     className='p-1 rounded-full w-9 h-9 ring-2 ring-white'
                     src={Twitter}
                     alt=''
                  />
               </div>
            </div>
         </div>
         <hr />
         <div className='flex justify-center py-5 text-white lg:text-lg'>
            <p>
               Copyright © 2022{" "}
               <span className='font-semibold'>CV Zaman Now</span>
            </p>
         </div>
      </div>
   );
}
