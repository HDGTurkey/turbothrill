import PropTypes from "prop-types";
import React from "react";
//import { Link } from "react-router-dom";

import { useSite } from "../../context/Context";
import Link from "next/link";

interface Props {
  blogData: any;
  key: any;
}

const BlogThreeCard = ({ blogData }: Props) => {
  const data = useSite();
  const cleanDescription = blogData.description
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/<img[^>]*>/g, "");
  const maxLength = 400;
  const truncatedDescription =
    cleanDescription.length > maxLength
      ? cleanDescription.slice(0, maxLength) + "..." // İlk 100 karakter + "..." ekleniyor
      : cleanDescription;
  const pubDate = new Date(blogData.pubDate);
  const formattedDate = pubDate.toLocaleDateString("tr-TR");
  return (
    <div className="postbox__thumb mx-auto mt-1 max-w-7xl ">
      <div className=" flex ">
        <Link
          href={`${blogData.link}`}
          className={`p-5 transition-all ${
            data.theme === "light"
              ? "bg-gray-100 shadow-md hover:bg-gray-200"
              : "bg-[#262626] from-gray-800 text-white shadow-md hover:bg-[#333333]"
          } rounded-sm p-2`}
        >
          <div className="overflow-hidden">
            <img
              src={blogData.thumbnail}
              alt="NaN "
              className="transform-gpu transition-transform hover:scale-125"
            />
          </div>
          <div className="mx-auto my-auto px-10 text-left ">
            <Link href={`${blogData.link}`}>
              <h3 className="postbox__title py-2 text-2xl  font-bold">
                {blogData.title}
              </h3>
            </Link>
            <div className="meta-post">
              <a href="/home" className="border-r-2 border-green-900 pr-2">
                {blogData.author}
              </a>
              <a href="/home" className="pl-2">
                {formattedDate}
              </a>
            </div>
            <div className="postbox__text pb-5 pt-5">
              <p>{truncatedDescription}</p>
            </div>
            {/* <div className='py-3'>{blogData.excerpt.length > 150 ? `${blogData.excerpt.substring(0, 150)}...` : blogData.excerpt}</div> */}
            <div className="pb-5 pt-5">
              <button
                type="button"
                className=" hover:bg-[#cc2e32 inline-flex items-center rounded-md  bg-[#ec373c] px-5 py-2.5 pb-3 text-center text-sm font-medium text-white"
              >
                <p className="text-white">Devamını Oku</p>
                <svg
                  aria-hidden="true"
                  className="-mr-1  ml-2 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogThreeCard;
