import { useState } from "react";
import Icon from "/img/Icon.svg";
import { Link } from "react-router-dom";

function Navbar() {
   const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

   return (
      <div className='flex items-center justify-between px-5 py-8 bg-green-700 border-b '>
         <a href='/'>
            <img src={Icon} alt='logo' />
         </a>
         <nav className=''>
            <section className='flex MOBILE-MENU lg:hidden'>
               <div
                  className='space-y-2 HAMBURGER-ICON'
                  onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
               >
                  <span className='block h-0.5 w-8  bg-white'></span>
                  <span className='block h-0.5 w-8  bg-white'></span>
                  <span className='block h-0.5 w-8  bg-white'></span>
               </div>

               <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                  {" "}
                  <div
                     className='absolute top-0 right-0 px-8 py-8 CROSS-ICON'
                     onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                  >
                     <svg
                        className='w-8 h-8 text-white'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                     >
                        <line x1='18' y1='6' x2='6' y2='18' />
                        <line x1='6' y1='6' x2='18' y2='18' />
                     </svg>
                  </div>
                  <ul className='text-white MENU-LINK-MOBILE-OPEN flex  flex-col items-center justify-between min-h-[250px]'>
                     <li className='my-8 uppercase border-b border-gray-400'>
                        <Link to='/'>Beranda</Link>
                     </li>
                     <li className='my-8 uppercase border-b border-gray-400'>
                        <Link to='/'>Tentang Kami</Link>
                     </li>
                     <li className='my-8 uppercase border-b border-gray-400'>
                        <Link to='/'>Buat CV</Link>
                     </li>
                     <li className='my-8 uppercase border-b border-gray-400'>
                        <Link to='/'>Surat Lamaran</Link>
                     </li>
                     <li className='flex gap-9'>
                        <button className='px-4 py-2 text-black bg-white rounded-md hover:font-bold hover:ring-white ring-2 hover:bg-green-700 hover:text-white ring-black'>
                           Daftar
                        </button>
                        <button className='px-4 py-2 text-white bg-green-600 rounded-md ring-2 ring-white'>
                           Masuk
                        </button>
                     </li>
                  </ul>
               </div>
            </section>

            <ul className='hidden space-x-8 text-white DESKTOP-MENU lg:flex'>
               <li>
                  <Link to='/'>Beranda</Link>
               </li>
               <li>
                  <Link to='/'>Tentang Kami</Link>
               </li>
               <li>
                  <Link to='/'>Buat CV</Link>
               </li>
               <li>
                  <Link to='/'>Surat Lamaran</Link>
               </li>
            </ul>
         </nav>

         <div className='hidden gap-5 text-white lg:flex'>
            <button className='py-2 px-7 ring-2 ring-white'>Daftar</button>
            <button>Masuk</button>
         </div>
         <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #15803d;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
   );
}

export default Navbar;
