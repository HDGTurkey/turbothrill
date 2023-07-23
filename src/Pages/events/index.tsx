import React, { useEffect } from 'react'
import BlogArea from '../../app/Components/EventWrapper';

import Breadcrumb from '@/app/Components/breadcrumb';
import EventWrapper from '../../app/Components/EventWrapper';


export const EventList = () => {

  return (
    <div className=' '>
     
        <Breadcrumb title={'Events'} />
        <EventWrapper />
        
        
     
    </div>
  )
}

export default EventList;