import Link from "next/link";
// import EventClassic from "../../data/event/EventClassic.json";

import { events as eventsModel } from "../../model/events";
import { TeamImage } from "@/pages/team/TeamImage";
import "@agconnect/instance";
import "@agconnect/auth";
import "@agconnect/cloudstorage";

interface Events {
  id: string;
  slug_name: string;
  state: string;
  imgs: string;
  status_event: string;
  local_name: string;
  local_address: string;
  name: string;
  date: string;
  description: Text;
}
export const EventCard = (events: any) => {
  const {
    id,
    slug_name,
    state,
    status_event,
    local_name,
    imgs,
    local_address,
    name,
    date,
    description,
  } = events.events;
  const eventDate = new Date(date);

  // Gün, Ay ve Yıl bilgilerini al
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString("default", { month: "long" });
  const year = eventDate.getFullYear();

  // Kalan günü hesapla
  const currentDate = new Date();
  const timeDifference = eventDate.getTime() - currentDate.getTime();
  const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // Tarihin saatini al
  const hours = eventDate.getHours();
  const minutes = eventDate.getMinutes();
  const formatEventDate = (dateString: string) => {
    const eventDate = new Date(dateString);

    // Gün, Ay ve Yıl bilgilerini al
    const day = eventDate.getDate();
    const month = eventDate.toLocaleString("default", { month: "long" });
    const year = eventDate.getFullYear();

    // Kalan günü hesapla
    const currentDate = new Date();
    const timeDifference = eventDate.getTime() - currentDate.getTime();
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Tarihin saatini al
    const hours = eventDate.getHours();
    const minutes = eventDate.getMinutes();

    return {
      formattedTime: `${hours}:${minutes < 10 ? "0" + minutes : minutes}`,
      formattedDate: `${day} ${month} ${year}`,
      remainingDays,
    };
  };
  const handleClick = () => {
    window.location.href = `/event-detail/${slug_name}`;
  };
  return (
    <>
      <div className="max-w-[350px] rounded border border-gray-100 bg-white shadow-xl">
        <div className="p-3 ">
          <div className="flex  justify-between text-xl font-bold">
            <div className="mb-2 mt-2 font-bold text-black">{name}</div>
          </div>
          <TeamImage imgPath={imgs} width="250px" alt="" />
          <div className="my-8 flex-wrap items-center text-sm">
            <div className="flex-1"></div>
            <div className="relative float-right text-green-700">
              <span
                className={`rounded-sm p-2 text-lg font-bold capitalize shadow-lg ${
                  status_event === "active"
                    ? "text-green-500 "
                    : "text-red-500 "
                }`}
              >
                {status_event}
              </span>
            </div>
          </div>
          <div className="text-md flex  justify-between">
            <div className="text-md mb-2 font-medium text-black">
              Date : {day} {month} {year}
            </div>
          </div>
          <div className="text-md flex  justify-between">
            <div className="text-md mb-2 font-medium text-black">
              Hours : {hours}:{minutes}
            </div>
          </div>
          <div className="text-md flex  justify-between ">
            <div className="text-md mb-2 font-medium text-black">
              Location : {local_name}
            </div>
          </div>
          <div
            className="mx-auto flex w-full cursor-pointer items-center justify-center rounded-sm bg-gray-200 p-1 text-black shadow-md transition hover:bg-gray-300 "
            onClick={handleClick}
          >
            View event
          </div>
          <div
            className={
              remainingDays <= 3
                ? "font-bold text-orange-200"
                : "font-bold text-orange-200"
            }
          >
            <span className="float-right py-2 text-lg ">
              {remainingDays} <span className="text-sm">days remaining...</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
