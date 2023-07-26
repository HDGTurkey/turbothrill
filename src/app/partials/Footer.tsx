import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const footer_contents = {
	shapes: [
		{ num: 'one', img: '/assets/img/creative/ThumpsUp.png' },
		{ num: 'two', img: '/assets/img/service/service-1.png' },
	],
	title: 'Come join us',
	text: 'Huawei Student Developers Program is a program created by Huawei for developers. By joining the program, you can take advantage of the many opportunities Huawei has to offer. Apply now to take advantage of the opportunities Huawei offers!',
	btn_text: 'Contact us',
	copy_right_text: <>© {new Date().getFullYear()} HSD </>,
	social_links: [
		{
			icon: 'fab fa-linkedin-in',
			link: 'https://www.linkedin.com/company/hsdturkiye/',
		},
		{ icon: 'fab fa-instagram', link: 'https://www.instagram.com/hsdturkiye/' },
		{
			icon: 'fab fa-youtube',
			link: 'https://www.youtube.com/@HuaweiDeveloperGroupsTurkiye',
		},
	],
}
const { shapes, btn_text, copy_right_text, social_links, text, title } = footer_contents

const Footer: React.FC = () => {
	return (
		<footer className="p-relative">
			<div className="tp-footer-area pt-120 p-relative">
				{shapes.map((s, i) => (
					<div key={i} className={`tp-footer-shape-${s.num}`}>
						<img src={s.img} alt="" />
					</div>
				))}
				<div className="container">
					<div className="row">
						<div className="col-xl-12 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
							<div className="footer-widget-info text-center">
								<a href="" className="tp-footer-title rounded px-2 ">
									{title}
								</a>
								<div>
									<p className="">{text}</p>
									<Button
										href="https://id5.cloud.huawei.com/CAS/portal/loginAuth.html?reqClientType=89&loginChannel=89000400&regionCode=hk&loginUrl=https%3A%2F%2Fid5.cloud.huawei.com%3A443%2FCAS%2Fportal%2FloginAuth.html&lang=en-us&themeName=red&clientID=6099200&state=8696331&service=https%3A%2F%2Foauth-login5.cloud.huawei.com%2Foauth2%2Fv2%2FloginCallback%3Faccess_type%3Doffline%26client_id%3D6099200%26display%3Dpage%26flowID%3D4ccd6ecd9210402695300aa33b62189a%26h%3D1690120953.0880%26lang%3Den-us%26redirect_uri%3Dhttps%253A%252F%252Fdeveloper.huawei.com%252Fconsumer%252Fen%252Fprograms%252F%26response_type%3Dcode%26scope%3Dopenid%2Bhttps%253A%252F%252Fwww.huawei.com%252Fauth%252Faccount%252Fcountry%2Bhttps%253A%252F%252Fwww.huawei.com%252Fauth%252Faccount%252Fbase.profile%2Bhttps%253A%252F%252Fwww.huawei.com%252Fauth%252Faccount%252Floginid%2Bhttps%253A%252F%252Fwww.huawei.com%252Fauth%252Faccount%252Faccount.flags%2Bhttps%253A%252F%252Fwww.huawei.com%252Fauth%252Faccount%252Fstate.register%2Bhttps%253A%252F%252Fwww.huawei.com%252Fauth%252Faccount%252Frealname%252Fstate%2Bhttps%253A%252F%252Fwww.huawei.com%252Fauth%252Faccount%252Frealname%252Fidentity%2Bhttps%253A%252F%252Fwww.huawei.com%252Fauth%252Faccount%252Frealname%252Fctf.type%26state%3D8696331%26v%3D1b5af53acc070a992843b51c3228e957ee42cfa74316a224b4dbf2e9279d10a2&validated=true"
										className="tp-btn-yellow rounded-sm mb-2"
									>
										Join Now
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="tp-copyright-bottom wow tpfadeUp mt-16" data-wow-duration=".5s" data-wow-delay=".7s">
						<div className="row align-items-center">
							<div className="col-xl-4 col-lg-4 col-md-12 col-12">
								<div className="tp-copyright-logo-box text-md-center text-center text-lg-start mb-30">
									<div className="tp-copyright-logo">
										<Link href="/">
											<img src="/assets/img/logo/logo-blue.png" alt="" />
										</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
								<p className="right-receved">{copy_right_text}</p>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
								<div className="tp-copyright-social tp-copyright-social-two text-center text-lg-end mb-30">
									{social_links.map((s, i) => (
										<a key={i} href={s.link} target="_blank" rel="noreferrer">
											<i className={s.icon}></i>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
