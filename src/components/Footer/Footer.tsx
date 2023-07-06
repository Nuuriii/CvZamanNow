import Icon from "/img/Icon.svg";
import { Link } from "react-router-dom";

export default function Footer() {
   return (
      <div className='bg-green-800'>
         <div>
            <div>
               <img src={Icon} alt='' />
               <p>
                  Memudahkan Anda menuju perusahaan impian dengan menggunakan CV
                  yang efektif dan efisien
               </p>
               <p>Question or feedback ? we’d love to hear from you</p>
            </div>
            <div>
               <div>
                  <h2>Perusahaan</h2>
                  <Link to={""}>Tentang Kami</Link>
               </div>
               <div>
                  <h2>Pusat bantuan</h2>
                  <Link to={""}>FAQ</Link>
               </div>
            </div>
         </div>
         <div></div>
      </div>
   );
}
