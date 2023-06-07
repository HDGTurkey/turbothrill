import React, { useEffect } from 'react'
import EventWrapper from '../../app/Components/EventWrapper';

import PageTitle from '../../app/Components/PageTitle';


export const EventList = () => {

  return (
    <div className='container mx-auto '>
      <div className='mx-8'>
        <PageTitle title='Events Page' />
        <EventWrapper />
      </div>
    </div>
  )
}

export default EventList;