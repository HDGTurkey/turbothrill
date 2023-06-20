"use client";

import { About } from '../app/Components/Home/About';
import { FeatureEvent } from '../app/Components/Home/FeatureEvent';
import { OurEvents } from '../app/Components/Home/OurEvents';
import { Partner } from '../app/Components/Home/Partners';
import WhatWeDo from '../app/Components/Home/WhatWeDo';
import { HelloDiv } from '../app/Components/Home/HelloDiv';
import ProjectArea from '@/app/Components/Home/project-area';

//container mx-auto
export default function HomePage() {
  return (
    <>
      <div className=''>
        <HelloDiv />
        <WhatWeDo />
        {/* <About /> */}
        <ProjectArea />
        
        {/* <OurEvents />
        <FeatureEvent /> */}
        {/* <Partner /> */}
      </div>
    </>
  );
}
