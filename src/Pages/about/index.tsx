import React, { useEffect } from 'react'
// import { FooterThree, HeaderSix, Wrapper } from '../../layout';
import Breadcrumb from '@/app/components/breadcrumb'
// import CtaTwo from '../common/cta/cta-2';
import AboutArea from './about-area'
import ServicesArea from './services-area'
import FaqArea from './faq'
import FeatureArea from './feature-area'
// import FeatureArea from './feature-area';
// import ServicesArea from './services-area';
// import TeamArea from './team-area';

const About = () => {
	return (
		<>
			{/* <HeaderSix /> */}
			<Breadcrumb title={'What is HSD?'} />
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
