import React from 'react'
import { useSite } from '../../Context/Context';
import PageTitle from '../PageTitle';
import BlogClassicData from '../../data/blog/BlogClassic.json';
import Link from 'next/link';
//import { Link } from 'react-router-dom';


interface Props {
  blogData: any;
}

export const BlogDetailContainer = ({ blogData }: Props) => {
  const data = useSite()
  return (
    <div className='max-w-7xl mx-auto'>
      <PageTitle title={blogData?.title} />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4">
          {blogData && blogData?.largeImage && (
            <img src={require(`../../assets/${blogData?.largeImage}`).default.src} alt={blogData?.title} className="w-full" />
          )}
          <div className="p-5">
            <h1 className="text-3xl font-bold mb-3">{blogData?.title}</h1>
            <p className="text-gray-500 mb-3">{blogData?.date}</p>
            <p className="text-gray-500 mb-3">({blogData?.body})</p>
          </div>
        </div>
        <div className="w-full lg:w-1/4 px-5">
          <div className={`p-5 mb-8  shadow-md ${data.theme === "light" ? "bg-gray-200" : "bg-gray-800"}`}>
            <form>
              <label className={`mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white`}>Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className={`block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg ${data.theme === "light" ? "bg-gray-50" : "bg-gray-900"}`} placeholder="Search blogs, subject..." required />
              </div>
            </form>
          </div>

          <div className={`p-5 mb-8 shadow-md ${data.theme === "light" ? "bg-gray-200" : "bg-gray-800"}`}>
            <h1 className="text-3xl font-bold mb-3 text-left">Categories</h1>
            <ul className="list-none text-left ">
              {blogData && blogData?.categories && blogData?.categories.map((single: any, key: any) => {
                return (
                  <div key={key} className='grid grid-cols-2 border-b-2 border-white py-3 cursor-pointer'>
                    <li className='flex-1' key={key}>{single}</li>
                    <p className='text-right'>4</p>
                  </div>
                )
              })}
            </ul>
          </div>

          <div className={`p-5 mb-8 shadow-md ${data.theme === "light" ? "bg-gray-200" : "bg-gray-800"}`}>
            <h1 className="text-3xl font-bold mb-3 text-left">Popular Posts</h1>
            <ul className="list-none text-left ">
              {BlogClassicData && BlogClassicData.map((single, key) => {
                return (
                  <div key={key} className='border-b-2 border-white py-3 cursor-pointer'>
                    <li className='flex-1 hover:underline' key={key}>
                      <Link href={`/blog-details/${single.slug_title}`} >
                        {single.title}
                      </Link>
                    </li>
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}

export default BlogDetailContainer