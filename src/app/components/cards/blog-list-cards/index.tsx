import React from 'react'
import { useSite } from '../../../context/Context'

interface BlogListCardProps {
	blogs: any
	loading?: boolean
}

export const BlogListCard = ({ blogs, loading }: BlogListCardProps) => {
	const data = useSite()
	// if (loading) {
	//     return <h2>Loading...</h2>
	// }

	return (
		<>
			{loading && (
				<div className="animate-pulse rounded-full bg-gray-300 h-12 w-12"> loading </div>
			)}

			<ul className="p-3 ">
				<div className="columns-1 md:columns-3 lg:columns-4 max-w-7xl mx-auto mb-12 ">
					{blogs.map((blog: any) => (
						<li key={blog.id}>
							<div className="flex flex-wrap justify-center max-w[1200px] gap-8 mb-8">
								<div
									className={`flex flex-col overflow-hidden shadow-xl ${
										data.theme === 'light'
											? 'bg-gradient-to-r from-gray-100 to-gray-400 text-dark'
											: 'bg-gradient-to-r from-gray-800 to-gray-90 text-white'
									} rounded-lg`}
								>
									<div className="card__header">
										<img
											className="w-full rounded-md h-auto"
											src={`https://source.unsplash.com/random/${blog.id}`}
											alt="blog.png"
										/>
									</div>
									<div className="card__body flex flex-col gap-3 p-4 ">
										<span
											className={`self-start px-1 py-1 bg-gradient-to-r  text-sm rounded-lg from-cyan-500 to-blue-500 text-white`}
										>
											Technology
										</span>
										<h4
											className={`capitalize text-2xl  ${
												data.theme === 'light' ? ' ' : ' '
											}`}
										>
											{' '}
											{blog.title.length > 20
												? `${blog.title.substring(0, 20)}...`
												: blog.title}
										</h4>
										<p className="text-left">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Sequi perferendis molestiae non nemo doloribus.
											Doloremque, nihil! At ea atque quidem!
										</p>
									</div>
									<div className="py-1 border-t-2">
										<div className="flex p-3">
											<img
												className="w-[50px] rounded-3xl h-[50px]"
												src={`https://source.unsplash.com/random/${blog.id}`}
												alt="blog.png"
											/>
											<div className="user__info w-56">
												<h1 className="capitalize">Jane Doe</h1>
												<small className="text-gray-600">2h ago</small>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					))}
				</div>
			</ul>
		</>
	)
}

export default BlogListCard
