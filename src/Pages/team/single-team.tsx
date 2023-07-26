import Link from 'next/link'
import React from 'react'

interface SingleTeamProps {
	team: {
		id: number
		img: string
		name: string
		designation: string
		twitter: string
		linkedin: string
		github: string
		mail: string
	}
}

const SingleTeam: React.FC<SingleTeamProps> = ({ team }: any) => {
	const { id, img, name, designation, twitter, linkedin, github, mail } = team
	const [showModal, setShowModal] = React.useState(false)
	return (
		<div className="col-xl-3 col-lg-3 col-md-6  wow tpfadeUp mr-5 " data-wow-duration={'0.7s'} data-wow-delay={'0.7s'}>
			<div className="tpteam mb-20 ">
				<div className="tpteam__shape-1">
					<img src="assets/img/team/team-shape-5.1.png" alt="" />
				</div>
				<div className="tpteam__shape-2">
					<img src="assets/img/team/team-shape-5.2.png" alt="" />
				</div>
				<div className="tpteam__thumb w-full h-[300px] overflow-hidden">{img && <img className="w-full h-auto object-cover" src={require(`../../app/assets/Images/team/` + img).default.src} alt="" />}</div>
				<div className="tpteam__content">
					<h4 className="tp-team-sm-title">
						<Link href="#">{name}</Link>
					</h4>

					<div>
						<button className="btn btn-primary mt-3" onClick={() => setShowModal(true)}>
							View Profile
						</button>
					</div>
				</div>
			</div>

			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
						<div className="relative w-72 my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}

								{/*body*/}
								<div className="relative p-6 flex-auto p-2 my-3">
									<img className="w-32 h-32 rounded-full mx-auto" src={require(`../../app/assets/Images/team/` + img).default.src} alt="John Doe" />
								</div>

								<div>
									<h3 className="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
									<div className="text-center text-gray-400 text-xs font-semibold">
										<p>{designation}</p>
									</div>
									<table className="text-xs my-3 mx-auto">
										<tbody>
											<tr>
												<td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
												<td className="px-2 py-2">{mail}</td>
											</tr>
										</tbody>
									</table>
									<div className="text-center my-3 space-x-5">
										<a href={twitter}>
											<i className="fab fa-twitter"></i>
										</a>
										<a href={linkedin}>
											<i className="fab fa-linkedin"></i>
										</a>
										<a href={github}>
											<i className="fab fa-github"></i>
										</a>
									</div>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</div>
	)
}

export default SingleTeam
