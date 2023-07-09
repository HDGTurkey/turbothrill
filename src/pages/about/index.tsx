import React, { useEffect } from 'react'
// import { FooterThree, HeaderSix, Wrapper } from '../../layout';
import Breadcrumb from '@/app/components/breadcrumb'
// import CtaTwo from '../common/cta/cta-2';
import AboutArea from '@/pages/about/about-area'
import ServicesArea from '@/pages/about/services-area'
import FaqArea from '@/pages/about/faq'
import FeatureArea from '@/pages/about/feature-area'

// import FeatureArea from './feature-area';
// import ServicesArea from './services-area';
// import TeamArea from './team-area';

const About = () => {
	return (
		<>
			{/* <HeaderSix /> */}
			<Breadcrumb title={'HSD Nedir ?'} />
			<AboutArea />
			<ServicesArea />
			<FeatureArea />

			<FaqArea />
			{/*
      
      <FeatureArea/>
      <TeamArea/>
      <CtaTwo/>
      <FooterThree /> */}
		</>
	)
}

export default About
