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
  const cleanDescription = blogData.description.replace(/<\/?[^>]+(>|$)/g, '').replace(/<img[^>]*>/g, '');
  const maxLength = 400;
  const truncatedDescription = cleanDescription.length > maxLength
    ? cleanDescription.slice(0, maxLength) + "..."  // İlk 100 karakter + "..." ekleniyor
    : cleanDescription;
  const pubDate = new Date(blogData.pubDate);
  const formattedDate = pubDate.toLocaleDateString('tr-TR');
  return (
    <div className='max-w-7xl mx-auto mt-1 postbox__thumb '>
      <div className=' flex '>
        <Link href={`${blogData.link}`} className={`transition-all p-5 ${data.theme === 'light' ? "bg-gray-100 hover:bg-gray-200 shadow-md" : "bg-[#262626] from-gray-800 text-white hover:bg-[#333333] shadow-md"} rounded-sm p-2`}>
          <div className='overflow-hidden'>
            <img src={blogData.thumbnail} alt="NaN " className='transform-gpu transition-transform hover:scale-125' />
          </div>
          <div className='my-auto mx-auto px-10 text-left '>
            <Link href={`${blogData.link}`}>
              <h3 className='text-2xl py-2 font-bold  postbox__title'>

                {blogData.title}
              </h3>
            </Link>
            <div className="meta-post">
              <a href="/home" className='pr-2 border-r-2 border-green-900'>{blogData.author}</a>
              <a href="/home" className='pl-2'>
                {formattedDate}

              </a>
            </div>
            <div className='pb-5 pt-5 postbox__text'>
              <p>{truncatedDescription}</p>
            </div>
            {/* <div className='py-3'>{blogData.excerpt.length > 150 ? `${blogData.excerpt.substring(0, 150)}...` : blogData.excerpt}</div> */}
            <div className='pb-5 pt-5'>
              <button type="button" className=" pb-3 text-white bg-[#ec373c] hover:bg-[#cc2e32  font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center">
                <p className="text-white">Devamını Oku</p>
                <svg aria-hidden="true" className="w-5  ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>


            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}


export default BlogThreeCard
