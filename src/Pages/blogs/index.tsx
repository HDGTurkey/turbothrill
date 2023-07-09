import React, { useEffect, useState } from 'react'
import BlogItems from '@/pages/blogs/blog-items'
import Breadcrumb from '@/app/components/breadcrumb'

const BlogArea = () => {
	const [mediumData, setMediumData] = useState([])
	const [blogsLength, setBlogsLength] = useState(0)
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const blogsPerPage = 6

	useEffect(() => {
		fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@elselif`)
			.then((res) => res.json())
			.then((response) => {
				setMediumData(response.items)
				setBlogsLength(response.items.length)
				setIsLoading(false)
			})
			.catch((err) => console.log(err))
	}, [])
	const finalData = mediumData.slice(0, 10)

	const paginateBlogs = () => {
		const indexOfLastBlog = currentPage * blogsPerPage
		const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
		const currentBlogs = mediumData.slice(indexOfFirstBlog, indexOfLastBlog)
		return currentBlogs
	}
	const _setCurrentPage = (currentPage: number) => {
		setCurrentPage(currentPage)
	}

	return (
		<>
			<Breadcrumb title={'Yazılarımız'} />
			<div className="postbox__area w-full pt-120 pb-120">
				<div className="md:mx-32">
					<div className="row">
						<div className="">
							<div className="postbox__wrapper  grid grid-cols-1    ">
								{finalData.map((single, key) => (
									<div
										key={key}
										className="flex bg-gray-100  shadow-sm p-3 m-3 rounded-md"
										data-aos="fade-up"
									>
										<BlogItems blog={single} />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BlogArea
