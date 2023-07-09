import Link from 'next/link'
import React from 'react'

interface FeatureItemProps {
	title: string
	subtitle: string
	color?: number
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, subtitle, color }) => {
	return (
		<div className="col-xl-3 col-lg-3 col-md-6">
			<div className="acfeature mb-50">
				<div className={`ac-circle ${color ? `ac-cirle-color-${color}` : ''}`}></div>
				<div className="acfeature__item">
					<h3 className="ac-feature-sm-title">
						<div className="mx-2">{title}</div>
					</h3>
					<p>{subtitle}</p>
				</div>
			</div>
		</div>
	)
}

const contents = {
	title: 'Elçi Olma Süreci',
	sm_desc_1:
		'Huawei Öğrenci Elçisi programı, teknoloji ve yenilik konusunda hevesli ve deneyimlerini akranlarıyla paylaşmaya istekli bir grup öğrenci lideri oluşturmayı amaçlayan küresel bir programdır. Program, öğrencilerin mesleki ve kişisel becerilerini geliştirmelerine, en son teknolojiler hakkında bilgi edinmelerine ve daha iyi bir topluluk oluşturmalarına yardımcı olmak için tasarlanmıştır.',
	sm_desc_2: '',
}
const { title, sm_desc_1, sm_desc_2 } = contents

const FeatureArea = () => {
	return (
		<>
			<div className="ac-feature-area">
				<div className="container">
					<div className="row ac-feature-space">
						<div className="col-xl-6 col-lg-6">
							<div className="ac-feature-left">
								<h3 className="ac-feature-title">{title}</h3>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6">
							<div className="ac-feature-right">
								<p className="pb-25">{sm_desc_1}</p>
								<p>{sm_desc_2}</p>
							</div>
						</div>
					</div>
					<div className="ac-feature-border-top">
						<div className="row ">
							<FeatureItem title={'Başvuru'} subtitle={''} />
							<FeatureItem
								title={'Ulusal Proje Yöneticileri İle Mülakat'}
								subtitle={''}
							/>
							<FeatureItem
								title={'Küresel Proje Yöneticileri İle Mülakat'}
								subtitle={''}
							/>
							<FeatureItem title={'Sertifika'} subtitle={''} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FeatureArea
