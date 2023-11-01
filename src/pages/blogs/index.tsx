import React, { useEffect, useState } from "react";
import BlogItems from "./blog-items";
import Breadcrumb from "@/app/components/breadcrumb";

const BlogArea = () => {
  const [mediumData, setMediumData] = useState([]);
  const [blogsLength, setBlogsLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@elselif`,
    )
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items);
        setBlogsLength(response.items.length);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const finalData = mediumData.slice(0, 10);

  const paginateBlogs = () => {
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = mediumData.slice(indexOfFirstBlog, indexOfLastBlog);
    return currentBlogs;
  };
  const _setCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <>
      <Breadcrumb title={"Blogs"} />
      <div className="postbox__area pt-120 pb-120 w-full">
        <div className="md:mx-32">
          <div className="row">
            <div className="">
              <div className="postbox__wrapper  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    ">
                {finalData.map((single, key) => (
                  <div
                    key={key}
                    className="m-3 flex  rounded-md bg-gray-100 p-3 shadow-sm"
                    data-aos="fade-up"
                  >
                    <BlogItems blog={single} />
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="col-xxl-4 col-xl-4 col-lg-4">
              
              <BlogSidebar />
              
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArea;
