import { useState, useEffect, useContext } from "react";
import { useSite } from "../context/Context";
import EventCard from "./cards/EventCard";
import { useRouter } from "next/router";
import { AGCContext } from "../context/AGCProvider";
import { events as eventsModel } from "../model/events.js";

import MyLoader from "../utils/MyLoader";

import "@agconnect/instance";
import "@agconnect/auth";
import "@agconnect/cloudstorage";
import TeamImage from "@/pages/team/TeamImage";

interface Events {
  id: string;
  slug_name: string;
  state: string;
  imgs: string;
  local_name: string;
  local_address: string;
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
  }, [events]);

  useEffect(() => {
    getEvents();

    const page = location.query.page?.toString() || "";

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
    return () => { };
  }, [eventsLength]);

  //backward currentPage set fonksiyonu
  const _setCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <>
      <div
        className={`' py-3 shadow-sm ${data.theme === "light" ? " bg-[#F6F8FD]" : "bg-[#151515]"
          }`}
      >
        <div className="mx-auto flex max-w-6xl py-3">
          <div className="mx-auto items-start text-start">
            <div className=" mx-auto grid grid-cols-1 gap-3 lg:grid-cols-4">
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
      <div className="mx-auto mt-10 flex max-w-6xl justify-between pt-8 text-left">
        <div className="">
          <span className="mx-5 text-3xl font-bold text-black md:ml-5">
            Events
            <br />
          </span>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl justify-between pt-8 text-left">
        {loading ? (
          <MyLoader />
        ) : (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <div
          key={key}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          onClick={handleClick}
        >
           <TeamImage imgPath={event.imgs} width="550px" alt="" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">
              {event.name}
            </h3>
            <p className="text-sm text-gray-600">{event.local_name}</p>
            <p className="text-sm text-gray-600">
              {event.date.toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    }
  })}
</div>



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
