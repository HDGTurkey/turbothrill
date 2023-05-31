import PropTypes from "prop-types";
import React from 'react';
//import { Link } from "react-router-dom";

import { useSite } from "../../Context/Context";
import Link from "next/link";

interface Props {
  blogData: any;
  key: any;
}

const BlogThreeCard = ({ blogData }: Props) => {
  const data = useSite();
  return (
    <div className='max-w-7xl mx-auto mt-1'>
      <div className=' flex '>
        <Link href={`/blog-details/${blogData.slug_title}`} className={` bg-gradient-to-t transition-all ${data.theme === 'light' ? " bg-[#c3c3c3] from-gray-200 hover:bg-gray-100 " : " bg-[#101010] from-gray-800 text-white hover:bg-gray-800 "} rounded-sm p-2`}>
          <div className='overflow-hidden'>
            <img src={require(`../../assets/Images/blog/370/blog-${blogData.id}.jpg`).default.src} alt="NaN " className='transform-gpu transition-transform hover:scale-125' />
          </div>
          <div className='my-auto mx-auto px-10 text-left '>
            <Link href={`/blog-details/${blogData.slug_title}`}>
              <h3 className='text-2xl py-3 font-bold uppercase'> {blogData.id}){blogData.title.length > 25 ? `${blogData.title.substring(0, 25)}...` : blogData.title}</h3>
            </Link>
            <div className="meta-post">
              <a href="/home" className='pr-2 border-r-2 border-green-900'>Yakup Sarı</a>
              <a href="/home" className='pl-2'> 10.01.2023</a>
            </div>
            <div className='py-3'>{blogData.excerpt.length > 150 ? `${blogData.excerpt.substring(0, 150)}...` : blogData.excerpt}</div>
            <div className='pb-5 pt-5'>
              <button type="button" className="pb-5text-white bg-orange-700 hover:bg-orange-800  font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center">
                Devamını Oku
                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}


export default BlogThreeCard
