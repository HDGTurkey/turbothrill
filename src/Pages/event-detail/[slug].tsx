/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react'
import EventClassic from '../../app/data/event/EventClassic.json'
import GuestListClassic from '../../app/data/event/GuestListClassic.json'
import { useSite } from '../../app/context/Context'
import { useRouter } from 'next/router'

// image icons
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import { AGCContext } from '../../app/context/AGCProvider'
import { events as eventsModel } from '../../app/model/events.js'
import Breadcrumb from '@/app/components/breadcrumb'

const EventDetailPage: React.FC = () => {
	const themeData = useSite()

	const agcContext = useContext(AGCContext)
	const [loading, setLoading] = useState(false)
	const [eventData, setEventData] = useState<Events[]>([])

	// slugname set
	const router = useRouter()

	interface Events {
		name: string
		slug_name: string
		description: string
		date: Date
		state: string
		locName: string
		locAddress: string
	}

	async function getEvent(slugName: string) {
		setLoading(true)
		const data = await agcContext.executeQueryWhere(eventsModel, 'slug_name', slugName)
		setEventData(data)
	}

	useEffect(() => {
		const { slug } = router.query
		if (slug) {
			const slugName = slug.toString().toLowerCase()
			getEvent(slugName)
		}
	}, [getEvent, router.query])

	useEffect(() => {
		setLoading(false)
		console.log(eventData)
	}, [eventData])

	return loading ? (
		<div>Loading</div>
	) : (
		<div className=" ">
			<Breadcrumb title={eventData[0]?.name} />

			<div className=" mx-auto   ">
				<div className="flex text-2xl text-left mx-auto p-5 ">
					<div className=" flex-1">
						<h1 className="text-3xl font-bold mb-3 text-black mx-5">{eventData[0]?.name}</h1>
					</div>
				</div>
				<div className={`shadow-lg justify-center grid grid-cols-1 lg:grid-cols-2 lg:flex ${themeData.theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-800 text-white'}`}>
					<div className={`w-auto ${themeData.theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
						<div className="px-5 ">
							<img alt="img" className="mt-3 " src="https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508957542%2F676x380.webp&w=3840&q=75"></img>
							<p className="text-left m-5 ">{eventData[0]?.description}</p>
						</div>
					</div>
					<div className={`min-w-[300px] m-5 ${themeData.theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-800 text-white'}`}>
						<div className="mb-3 bg-red-100 flex rounded-lg ">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48" className="mx-5">
								<linearGradient id="hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1" x1="7.534" x2="27.557" y1="7.534" y2="27.557" gradientUnits="userSpaceOnUse">
									<stop offset="0" stopColor="#f44f5a"></stop>
									<stop offset=".443" stopColor="#ee3d4a"></stop>
									<stop offset="1" stopColor="#e52030"></stop>
								</linearGradient>
								<path
									fill="url(#hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1)"
									d="M42.42,12.401c0.774-0.774,0.774-2.028,0-2.802L38.401,5.58c-0.774-0.774-2.028-0.774-2.802,0	L24,17.179L12.401,5.58c-0.774-0.774-2.028-0.774-2.802,0L5.58,9.599c-0.774,0.774-0.774,2.028,0,2.802L17.179,24L5.58,35.599	c-0.774,0.774-0.774,2.028,0,2.802l4.019,4.019c0.774,0.774,2.028,0.774,2.802,0L42.42,12.401z"
								></path>
								<linearGradient id="hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2" x1="27.373" x2="40.507" y1="27.373" y2="40.507" gradientUnits="userSpaceOnUse">
									<stop offset="0" stopColor="#a8142e"></stop>
									<stop offset=".179" stopColor="#ba1632"></stop>
									<stop offset=".243" stopColor="#c21734"></stop>
								</linearGradient>
								<path fill="url(#hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2)" d="M24,30.821L35.599,42.42c0.774,0.774,2.028,0.774,2.802,0l4.019-4.019	c0.774-0.774,0.774-2.028,0-2.802L30.821,24L24,30.821z"></path>
							</svg>
							<p className={`text-lg font-bold mx-5 ${themeData.theme === 'light' ? 'text-black' : 'text-black'}`}>{eventData[0]?.state}</p>
						</div>

						<div className={`p-5 mb-5  border-solid border-2 shadow-md w-auto rounded-lg flex space-x-4 items-start ${themeData.theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
							{/* <img alt="img" className="w-5 h-5 bg-black " src="https://img.icons8.com/material-outlined/24/null/calendar--v1.png" /> */}
							<CalendarTodayIcon className=""></CalendarTodayIcon>
							<p className=" ">{eventData[0]?.date ? new Date(eventData[0]?.date).toLocaleDateString() : ''}</p>
							{/* <img alt="img" className="w-5 h-5" src="https://img.icons8.com/material-outlined/24/null/clock--v1.png" /> */}
							<AccessTimeIcon></AccessTimeIcon>
							<p className=" ">{eventData[0]?.date ? new Date(eventData[0]?.date).toLocaleTimeString() : ''}</p>
						</div>
						<div className={`p-5 mb-5 border-solid border-2 shadow-md w-auto rounded-lg flex items-start ${themeData.theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
							{/* <img alt="img" className='w-6 h-6' src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/null/external-marker-map-pin-flatart-icons-outline-flatarticons.png" /> */}
							<LocationOnIcon></LocationOnIcon>
							<div className="justify-items-start mx-2">
								<p>{eventData[0]?.locName}</p>
								<p>{eventData[0]?.locAddress}</p>
							</div>
						</div>
						<div className={`p-5 mb-5  border-solid border-2 shadow-md rounded-lg w-auto ${themeData.theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
							<p className="m-3 text-lg font-bold text-left ">Konuklar</p>

							{GuestListClassic.map((guest, id) => (
								<div key={id} className="flex m-5 text-left">
									<img alt="img" className="rounded-full w-[75px]" src={`${guest.img}`}></img>
									<div className="mx-5 ">
										<p className="font-medium  ">{guest.name}</p>
										<p className="italic font-light text-sm">{guest.title}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EventDetailPage
