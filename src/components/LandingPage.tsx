import Navbar from "./Navbar/Navbar";
import GetStarted from "./GetStarted/GetStarted";
import Opportunity from "./Opportunity/Opportunity";
import ImproveCareer from "./ImproveCareer/ImproveCareer";

export default function LandingPage() {
   return (
      <div>
         <div className='lg:h-screen'>
            <Navbar />
            <GetStarted />
            <Opportunity />
            <ImproveCareer />
         </div>
      </div>
   );
}
