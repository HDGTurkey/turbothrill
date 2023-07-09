import React from 'react'

const accordion_items = [
	{
		id: 'one',
		show: true,
		title: 'HSD topluluğuna katılmak için bilgisayar biliminde yetkin ve deneyimli bir kodlayıcı olmam gerekiyor mu?',
		desc: 'HSD topluluğu, her beceri seviyesinden gelecek vadeden geliştiricileri memnuniyetle karşılar. Yeni beceriler edinmek ve ağlarını genişletmekle ilgilenen her öğrenci başvurabilir.',
	},
	{
		id: 'two',
		show: true,
		title: 'HSD elçisi olmak ne kadar sürer?',
		desc: 'Başvurunuzu aldıktan sonra, bir inceleme süreci başlatacağız. Başvurunuzun gereksinimlerimizi karşıladığını tespit edersek, 1 hafta içinde sizinle iletişime geçeceğiz ve bir görüşme ayarlayacağız. Nihai kararımız görüşmeyi takip eden 3 gün içinde verilecektir. Alınan çok sayıda başvuru nedeniyle, başvurunuzun işlenmesi daha uzun sürebilir.',
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
												<h2
													className="accordion-header"
													id={`heading-${id}`}
												>
													<div
														className={`accordion-buttons`}
														data-bs-toggle="collapse"
														data-bs-target={`#collapse-${id}`}
														aria-expanded={show ? 'true' : 'false'}
														aria-controls={`collapse-${id}`}
													>
														{title}
													</div>
												</h2>
												<div
													id={`collapse-${id}`}
													className={`accordion-collapse  ${
														show ? 'show' : ''
													}`}
													aria-labelledby={`heading-${id}`}
													data-bs-parent="#accordionExample"
												>
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
