import Navbar from "./Navbar/Navbar";
import GetStarted from "./GetStarted/GetStarted";
import Opportunity from "./Opportunity/Opportunity";

export default function LandingPage() {
   return (
      <div>
         <div className='lg:h-screen'>
            <Navbar />
            <GetStarted />
            <Opportunity />
         </div>
      </div>
   );
}
