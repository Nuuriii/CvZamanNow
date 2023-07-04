import Navbar from "./Navbar/Navbar";
import GettingStarted from "./Content1/Content1";
import Opportunity from "./Opportunity/Opportunity";

export default function LandingPage() {
   return (
      <div>
         <div className='lg:h-screen'>
            <Navbar />
            <GettingStarted />
            <Opportunity />
         </div>
      </div>
   );
}
