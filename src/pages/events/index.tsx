import React, { useEffect } from 'react';
import BlogArea from '../../app/components/EventWrapper';

import Breadcrumb from '@/app/components/breadcrumb';
import EventWrapper from '../../app/components/EventWrapper';

export const EventList = () => {
   return (
      <div className=" ">
         <Breadcrumb title={'Events'} />
         <EventWrapper />
      </div>
   );
};

export default EventList;
