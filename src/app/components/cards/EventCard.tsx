import Link from 'next/link';
// import EventClassic from "../../data/event/EventClassic.json";

import { events as eventsModel } from '../../model/events';

interface Events {
   id: string;
   slug_name: string;
   state: string;
   locName: string;
   locAddress: string;
   name: string;
   date: string;
   description: Text;
}
export const EventCard = (events: any) => {
   return (
      <>
         <div className="bg-white shadow-xl rounded border w-[650px] border-gray-100">
            <div className="text-xl mx-5">
               <img
                  src="https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508957542%2F676x380.webp&w=3840&q=75"
                  alt="Event"
                  className="w-full pt-4  rounded-t"
               />
            </div>
            <div className="p-5">
               <div className="font-bold text-black text-xl mb-2">Event Name</div>
               <div className="flex items-center text-sm">
                  <div className="font-bold">Nov 18, 2022</div>
                  <div className="flex-1"></div>
                  <div className="text-green-700">
                     <span className="font-bold">Active</span>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default EventCard;
