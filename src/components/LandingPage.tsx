import Navbar from "./Navbar/Navbar";
import Content1 from "./Content1/Content1";

export default function LandingPage() {
   return (
      <div>
         <div className='lg:h-screen'>
            <Navbar />
            <Content1 />
         </div>
      </div>
   );
}
