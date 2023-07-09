'use client'

import { About } from '../app/components/Home/About'
import { FeatureEvent } from '../app/components/Home/FeatureEvent'
import { OurEvents } from '../app/components/Home/OurEvents'
import WhatWeDo from '../app/components/Home/WhatWeDo'
import { HelloDiv } from '../app/components/Home/HelloDiv'
import ProjectArea from '@/app/components/Home/project-area'

//container mx-auto
export default function HomePage() {
	return (
		<>
			<div className="">
				<HelloDiv />
				<WhatWeDo />
				{/* <About /> */}
				<ProjectArea />

				{/* <OurEvents />
        <FeatureEvent /> */}
				{/* <Partner /> */}
			</div>
		</>
	)
}
