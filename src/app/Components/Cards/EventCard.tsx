import Link from "next/link";
// import EventClassic from "../../data/event/EventClassic.json";

import { events as eventsModel } from "../../model/events";

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
            <div className='card shadow-xl  min-w-[200px] max-w-[400px] rounded border border-gray-100'>
                <div className='flex p-5 text-sm'>
                    <div>
                        {events.date}
                    </div>
                    <div className="flex-1">
                        Nov 18, 2022
                    </div>
                    <div className="text-green-700">
                        <span className="text-green-700 disc">-</span> active
                    </div>
                </div>
                <div className='text-xl mx-5'>
                    <div className="p-3">
                        {events.name}
                    </div>
                    <img src={`https://picsum.photos/400/200`} width="250px" alt='i' />
                </div>
                <div className='p-4'>
                    <Link href={`/event-detail/${EventClassic[0].slug_name}`}>
                        <h3 className=' text-md  text-white font-medium p-2  bg-blue-800 hover:bg-gray-400 rounded-full text-center transition-all'> Daha Fazlası</h3>

                    </Link>
                </div>
            </div>

        </>
    )
}


export default EventCard;