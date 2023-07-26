// import Box from '@mui/material/Box';
import ComingEventCard from '../cards/ComingEventCard';
import EventCard from '../cards/EventCard';
import EventCardBasic from '../cards/EventCardBasic';

export const OurEvents = () => {
   return (
      <>
         <div className=" py-10 px-10 max-w-7xl mx-auto">
            <div className="text-left sm:mx-auto">
               <h1 className="text-3xl font-semibold text-center">
                  Our <span className="text-[#ec373c]"> Event </span> & <span className="text-[#e34508]"> Meetup</span>
               </h1>
               <p className="text-md my-3 text-center">Events are listed in reverse chronological order by date.</p>
               <div className="grid sm:grid-cols-1 sm:w-11/12  md:grid-cols-3  lg:grid-cols-4  gap-4 mx-auto">
                  <EventCardBasic />
                  <EventCardBasic />
                  <EventCardBasic />
                  <EventCardBasic />
               </div>
            </div>
         </div>
      </>
   );
};

export default OurEvents;
