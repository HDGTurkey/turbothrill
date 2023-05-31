"use client";

import { About } from '../app/Components/Home/About';
import { FeatureEvent } from '../app/Components/Home/FeatureEvent';
import { OurEvents } from '../app/Components/Home/OurEvents';
import { Partner } from '../app/Components/Home/Partners';
import WhatWeDo from '../app/Components/Home/WhatWeDo';
import { HelloDiv } from '../app/Components/Home/HelloDiv';

export default function HomePage() {
  return (
    <>
      <HelloDiv />
      <WhatWeDo />
      <About />
      <OurEvents />
      <FeatureEvent />
      <Partner />
    </>
  );
}
