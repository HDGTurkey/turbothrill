import React, { useEffect } from 'react'
import BlogArea from '../../app/Components/EventWrapper';

import PageTitle from '../../app/Components/PageTitle';
import Breadcrumb from '@/app/Components/breadcrumb';
import EventWrapper from '../../app/Components/EventWrapper';


export const EventList = () => {

  return (
    <div className=' '>
     
        <Breadcrumb title={'Etkinlikler'} />
        <EventWrapper />
        
        
     
    </div>
  )
}

export default EventList;