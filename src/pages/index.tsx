"use client";

import { About } from "../app/components/home/About";
import { FeatureEvent } from "../app/components/home/FeatureEvent";
import { OurEvents } from "../app/components/home/OurEvents";
import WhatWeDo from "../app/components/home/WhatWeDo";
import { HelloDiv } from "../app/components/home/HelloDiv";
import ProjectArea from "@/app/components/home/project-area";
import Committe from "@/app/components/home/community";

//container mx-auto
export default function HomePage() {
  return (
    <>
      <div className="">
        <HelloDiv />
        <WhatWeDo />
        {/* <About /> */}
        <Committe/>
        <ProjectArea />

        {/* <OurEvents />
        <FeatureEvent /> */} 
        {/* <Partner /> */}
      </div>
    </>
  );
}
