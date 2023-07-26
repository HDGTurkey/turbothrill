import React from 'react'

const accordion_items = [
	{
		id: 'one',
		show: true,
		title: 'Do I need to be proficient in computer science and an experienced coder to join the HSD community?',
		desc: 'The HSD community welcomes aspiring developers of all skill levels. Any student interested in acquiring new skills and expanding their network is welcome to apply.',
	},
	{
		id: 'two',
		show: true,
		title: 'How long does it take to become an HSD ambassador?',
		desc: 'Upon receiving your application, we will begin a review process. If we determine that your application meets our requirements, we will contact within 1 week and arrange to conduct an interview. Our final decision will be made within 3 days following the interview. Due to the large number of applications received, it may take more time to process your application.',
	},
]

const FaqArea = () => {
	return (
		<>
			<div className="sd-accordio-area pt-130 pb-130">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="tp-custom-accordio faq-accordio-border">
								<div className="accordion" id="accordionExample">
									{accordion_items.map((item, i) => {
										const { id, show, title, desc } = item
										return (
											<div key={id} className="accordion-items">
												<h2 className="accordion-header" id={`heading-${id}`}>
													<div className={`accordion-buttons`} data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`} aria-expanded={show ? 'true' : 'false'} aria-controls={`collapse-${id}`}>
														{title}
													</div>
												</h2>
												<div id={`collapse-${id}`} className={`accordion-collapse  ${show ? 'show' : ''}`} aria-labelledby={`heading-${id}`} data-bs-parent="#accordionExample">
													<div className="accordion-body">{desc}</div>
												</div>
											</div>
										)
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FaqArea
