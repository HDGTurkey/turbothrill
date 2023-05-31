import { useState, useEffect } from 'react'
import BlogClassicData from '../data/blog/BlogClassic.json';
import BlogThreeCard from '../Components/Blogs/BlogThreeCard';
import { Pagination } from '../utils/Pagination';

//state 
import { setGlobalState, useGlobalState } from "../globalState/states"
import { useSite } from '../Context/Context';
import { useRouter } from 'next/router';


export const BlogWrapper = () => {
  const data = useSite();

  const [blogsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPage] = useState(0);
  const [blogsLength] = useState(Object.keys(BlogClassicData).length);

  let location = useRouter();

  useEffect(() => {

    const page = location.query.page?.toString() || ""

    if (!isNaN(parseInt(page))) {
      setCurrentPage(parseInt(page))
    } else {
      setCurrentPage(1)
    }

    if ((blogsLength % blogsPerPage) === 0) {
      setTotalPage(Math.floor(blogsLength / blogsPerPage))
    } else if ((blogsLength % blogsPerPage) != 0) {
      setTotalPage((Math.floor(blogsLength / blogsPerPage)) + 1)
    }
  })

  //backward currentPage set fonksiyonu
  const _setCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage)
  }

  return (
    <>
      <div className="max-w-7xl mx-auto grid gap-3 grid-cols-1 lg:grid-cols-3">
        {BlogClassicData.map((single, key) => {
          if (totalPages >= 1 && key >= ((currentPage - 1) * blogsPerPage) && key < (currentPage * blogsPerPage)) {
            return (
              <div key={key} className="flex" data-aos="fade-up">
                <BlogThreeCard blogData={single} key={key} />
              </div>
            );
          }
        })}
      </div>
      <div className={`max-w-7xl mx-auto mt-3 text-right border-[0.5px] rounded-lg ${data.theme === 'light' ? 'border-gray-300' : ' border-gray-700'}`}>
        {totalPages > 1 &&
          <Pagination pageName={location.pathname} currentPage={currentPage} totalPages={totalPages} _setCurrentPage={_setCurrentPage} />
        }
      </div>
    </>
  )
}

export default BlogWrapper
