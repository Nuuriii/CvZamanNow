import Navbar from "./Navbar/Navbar";
import Content1 from "./Content1/Content1";
import Content2 from "./Opportunity/Opportunity";

export default function LandingPage() {
   return (
      <div>
         <div className='lg:h-screen'>
            <Navbar />
            <Content1 />
            <Content2 />
         </div>
      </div>
   );
}
