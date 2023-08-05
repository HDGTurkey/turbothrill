// import Box from '@mui/material/Box';
import ComingEventCard from "../cards/ComingEventCard";
import EventCard from "../cards/EventCard";
import EventCardBasic from "../cards/EventCardBasic";

export const OurEvents = () => {
  return (
    <>
      <div className=" mx-auto max-w-7xl px-10 py-10">
        <div className="text-left sm:mx-auto">
          <h1 className="text-center text-3xl font-semibold">
            Our <span className="text-[#ec373c]"> Event </span> &{" "}
            <span className="text-[#e34508]"> Meetup</span>
          </h1>
          <p className="text-md my-3 text-center">
            Events are listed in reverse chronological order by date.
          </p>
          <div className="mx-auto grid gap-4  sm:w-11/12  sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4">
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
