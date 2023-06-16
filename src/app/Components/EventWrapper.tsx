import { useState, useEffect, useContext } from 'react'
import { useSite } from '../Context/Context'
import EventCard from './Cards/EventCard';
import { Pagination } from '../utils/Pagination';
import EventClassic from '../data/event/EventClassic.json';
import { useRouter } from 'next/router';
import { AGCContext } from '../Context/AGCProvider';
import { events as eventsModel } from "../model/events.js";


interface Events {
    name: string;
    slug_name: string;
}
function EventWrapper() {
    const data = useSite()
    const location = useRouter();

    const agcContext = useContext(AGCContext)
    //event states
    const [events, setEvents] = useState<Array<Events>>([])
    const [loading, setLoading] = useState(false)


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

    useEffect(() => {
        setEventsLength(events.length)
        console.log(eventsLength);

    }, [events])

    useEffect(() => {

        getEvents();

        const page = location.query.page?.toString() || ""

        if (!isNaN(parseInt(page))) {
            setCurrentPage(parseInt(page))
        } else {
            setCurrentPage(1)
        }


        if ((eventsLength % eventsPerPage) === 0) {
            setTotalPage(Math.floor(eventsLength / eventsPerPage))
        } else if ((eventsLength % eventsPerPage) != 0) {
            setTotalPage((Math.floor(eventsLength / eventsPerPage)) + 1)
        }
    }, [eventsLength])

    //backward currentPage set fonksiyonu
    const _setCurrentPage = (currentPage: number) => {
        setCurrentPage(currentPage)
    }

    return (
        <>
            <div className={`' py-3 ${data.theme === 'light' ? ' bg-gray-100' : 'bg-[#151515]'}`}>
                <div className='flex py-3 max-w-6xl mx-auto'>
                    <div className='items-start text-start'>
                        <div className='py-2'> To be informed about related events immediately:
                            <span className='text-blue-700 mx-3'>
                                info@hdgplus.com
                            </span>
                        </div>
                        <div className='py-2'>
                            Upcoming Events
                        </div>
                        <div className='flex'>
                            <EventCard events={events} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mt-10 justify-between pt-8 max-w-6xl mx-auto text-left'>
                <div className=''>
                    <span className='text-3xl'>Directory of past events<br /></span>
                    Events are listed in reverse chronological order by date.
                </div>
                <form className="form-login" action="#">
                    <div className="single-fild">
                        <input
                            className="px-6 h-10 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                            type="email"
                            placeholder="Events"
                        />
                    </div>
                </form>
            </div>
            <div className='flex mt-10 justify-between pt-8 max-w-7xl mx-auto text-left'>
                {loading ? "Loading" :
                    <table className="table-auto w-full  " >
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th className='w-[50%]'>Event Name</th>
                                <th>Date</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event, key) => {
                                if (totalPages >= 1 && key >= ((currentPage - 1) * eventsPerPage) && key < (currentPage * eventsPerPage)) {
                                    return (
                                        <tr key={key} className={`border-b-2 p-2 transition-colors rounded ${data.theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-800'}`}>

                                            <td><img className='p-3' src={require('../assets/Images/emplo.jpg').default.src} width="100px" height="" alt="" /></td>
                                            <td>{event.name.length > 15 ? `${event.name.substring(0, 20)}...` : event.name}</td>
                                            <td>2022-12-11</td>
                                            <td> <a href={`/event-detail/${event.slug_name}`} className='text-blue-500'>see more...</a> </td>
                                        </tr>
                                    );
                                }
                            }
                            )}
                        </tbody>
                    </table>
                }
            </div>
            {/* <div className="max-w-7xl mx-auto mt-3 text-right flex align-right"> */}
            <div className={`max-w-7xl mx-auto mt-3 text-right border-[0.5px] rounded-lg ${data.theme === 'light' ? 'border-gray-300' : ' border-gray-700'}`}>
                {totalPages > 1 &&
                    <Pagination pageName={location.pathname} currentPage={currentPage} totalPages={totalPages} _setCurrentPage={_setCurrentPage} />
                }
            </div>
            {/* </div> */}
        </>
    )
}

export default EventWrapper