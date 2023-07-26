import { useState, useEffect, useContext } from 'react';
import { useSite } from '../context/Context';
import EventCard from './cards/EventCard';
import { useRouter } from 'next/router';
import { AGCContext } from '../context/AGCProvider';
import { events as eventsModel } from '../model/events.js';

import MyLoader from '../utils/MyLoader';

interface Events {
   id: string;
   slug_name: string;
   state: string;
   locName: string;
   locAddress: string;
   name: string;
   date: Date;
   description: Text;
}
function EventWrapper() {
   const data = useSite();
   const location = useRouter();

   const agcContext = useContext(AGCContext);
   //event states
   const [events, setEvents] = useState<Array<Events>>([]);
   const [loading, setLoading] = useState(false);

   // pagination states
   const [eventsPerPage] = useState(6);
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPage] = useState(0);
   const [eventsLength, setEventsLength] = useState(Object.keys(events).length);

   async function getEvents() {
      setLoading(true);
      setEvents(await agcContext.executeQuery(eventsModel));
      console.log(await events);
      setLoading(false);
   }

   function isEventActiveAsDate(currentDate: Date, eventDate: Date) {
      let currentDateAsDate = new Date(currentDate);
      let eventDateAsDate = new Date(eventDate);
      if (currentDateAsDate < eventDateAsDate) {
         return true;
      } else {
         return false;
      }
   }

   useEffect(() => {
      setEventsLength(events.length);
      console.log(eventsLength);
   }, [events]);

   useEffect(() => {
      getEvents();

      const page = location.query.page?.toString() || '';

      if (!isNaN(parseInt(page))) {
         setCurrentPage(parseInt(page));
      } else {
         setCurrentPage(1);
      }

      if (eventsLength % eventsPerPage === 0) {
         setTotalPage(Math.floor(eventsLength / eventsPerPage));
      } else if (eventsLength % eventsPerPage != 0) {
         setTotalPage(Math.floor(eventsLength / eventsPerPage) + 1);
      }
      return () => {};
   }, [eventsLength]);

   //backward currentPage set fonksiyonu
   const _setCurrentPage = (currentPage: number) => {
      setCurrentPage(currentPage);
   };

   return (
      <>
         <div className={`' py-3 shadow-sm ${data.theme === 'light' ? ' bg-[#F6F8FD]' : 'bg-[#151515]'}`}>
            <div className="flex py-3 max-w-6xl mx-auto">
               <div className="items-start text-start mx-auto">
                  <div className="py-2 mx-3">
                     For Detailed Information About the Events:
                     <span className="text-blue-700 mx-3">hsdturkiye@gmail.com</span>
                  </div>
                  <div className="mx-3 py-2">
                     <h2 className="font-bold my-3 text-3xl text-black">Upcoming Events</h2>
                  </div>

                  <div className=" mx-auto grid gap-3 grid-cols-1 lg:grid-cols-3">
                     {events.map((event, key) => {
                        if (isEventActiveAsDate(new Date(), new Date(event.date))) {
                           return (
                              <div key={key} className="flex ">
                                 <EventCard events={event} />
                              </div>
                           );
                        }
                     })}
                  </div>

                  {/* <div className='flex'>
                            <EventCard events={events} />
                        </div> */}
               </div>
            </div>
         </div>
         <div className="flex mt-10 justify-between pt-8 max-w-6xl mx-auto text-left">
            <div className="">
               <span className="text-3xl mx-5 text-black font-bold md:ml-5">
                  Etkinliklerimiz
                  <br />
               </span>
            </div>
         </div>
         <div className="flex mt-10 justify-between pt-8 max-w-7xl mx-auto text-left">
            {loading ? (
               <MyLoader />
            ) : (
               <table className="table-auto w-full shadow-2xl mx-5 ">
                  <thead>
                     <tr>
                        <th className="p-5 text-lg ">Image</th>
                        <th className="w-[50%] text-lg">Event Name</th>
                        <th className="text-lg">Date</th>
                     </tr>
                  </thead>
                  <tbody className="">
                     {events.map((event, key) => {
                        if (
                           totalPages >= 1 &&
                           key >= (currentPage - 1) * eventsPerPage &&
                           key < currentPage * eventsPerPage
                        ) {
                           const handleClick = () => {
                              window.location.href = `/event-detail/${event.slug_name}`;
                           };
                           return (
                              <tr
                                 key={key}
                                 className={`border-b-2 p-2 border-2 border-gray-50 bg-gray-100 my-3 transition-colors rounded ${
                                    data.theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-800'
                                 }`}
                                 onClick={handleClick}
                              >
                                 <td>
                                    <img
                                       className="p-3 w-[100px] md:w-[200px]"
                                       src={require('../assets/Images/emplo.jpg').default.src}
                                       height=""
                                       alt=""
                                    />
                                 </td>
                                 <td className="text-black text-md">
                                    {event.name.length > 15 ? `${event.name.substring(0, 20)}...` : event.name}
                                 </td>
                                 <td>{event.date.toLocaleDateString()}</td>{' '}
                              </tr>
                           );
                        }
                     })}
                  </tbody>
               </table>
            )}
         </div>
         {/* <div className="max-w-7xl mx-auto mt-3 text-right flex align-right"> */}
         {/* <div className={`max-w-7xl mx-auto mt-3 text-right border-[0.5px] rounded-lg ${data.theme === 'light' ? 'border-gray-300' : ' border-gray-700'}`}>
                {totalPages > 1 &&
                    <Pagination pageName={location.pathname} currentPage={currentPage} totalPages={totalPages} _setCurrentPage={_setCurrentPage} />
                }
            </div> */}
         {/* </div> */}
      </>
   );
}

export default EventWrapper;
