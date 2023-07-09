import { createTheme } from '@mui/material/styles'
import axios from 'axios'
import React, { useEffect } from 'react'

import { EventCard } from '../cards/EventCard'

export const FeatureEvent = () => {
  const [events, setEvents] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const fetchEvents = async () => {
    setLoading(true)
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    setEvents(res.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <div className=" py-10 px-10 max-w-7xl mx-auto ">
      <div className="text-left">
        <h1 className="text-3xl font-semibold ">
          Our <span className="text-[#ec373c]"> Feature Event </span> &{' '}
          <span className="text-[#e34508]"> Meetup</span>
        </h1>
        <p className="text-md my-3">
          At sessions that span from the technical to the visionary, let’s
          celebrate and discover what the technologies can enable: how product
          innovation, open source, and ML and AI can propel enterprises forward
          and solve the big problems that impact all of us.
        </p>
        <div className="mt-3">
          <EventCard events={events} />
        </div>
      </div>
    </div>
  )
}
