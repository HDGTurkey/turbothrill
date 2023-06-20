import { useState, useEffect, useContext } from 'react'
// import BlogClassicData from '../data/blog/BlogClassic.json';
import BlogThreeCard from '../Components/Blogs/BlogThreeCard';
import { Pagination } from '../utils/Pagination';
import { AGCContext } from '../Context/AGCProvider';
import { blogs as blogsModel } from "../model/blogs.js";

//state 
import { useSite } from '../Context/Context';
import { useRouter } from 'next/router';
import BlogOneCard from './Blogs/BlogOneCard';

interface Blogs {
  id : string;
  image: string;
  largeImage : string;
  author: string;
  date: string;
  view: string;
  title: string;
  slug_title: string;
  excerpt: string;
  body: string;
}

export const BlogWrapper = () => {
  const data = useSite();
  let location = useRouter();

  const agcContext = useContext(AGCContext)
  // blogs states
  const [blogs, setBlogs] = useState<Array<Blogs>>([])
  const [loading, setLoading] = useState(false)

  // pagination states
  const [blogsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPage] = useState(0);
  const [blogsLength, setBlogsLength] = useState(Object.keys(blogs).length);

  async function getBlogs() {
    setLoading(true);
    setBlogs(await agcContext.executeQuery(blogsModel));
    setLoading(false);
  }

  useEffect(() => {
    setBlogsLength(blogs.length)
    console.log(blogsLength);
  }, [blogs])

  useEffect(() => {
    getBlogs();

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
  }, [blogsLength])

  //backward "currentPage set" function
  const _setCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage)
  }

  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@elselif`)
      .then(res => res.json())
      .then(response => {
        setMediumData(response.items);
        setBlogsLength(response.items.length);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const finalData = mediumData.slice(0, 10);

  return (
    loading ? "Loading" :
      <>
        <div className="max-w-7xl mx-auto grid gap-3 grid-cols-1 lg:grid-cols-3 mt-[200px]">
          {finalData.map((single, key) => {
              if (totalPages >= 1 && key >= ((currentPage - 1) * blogsPerPage) && key < (currentPage * blogsPerPage)) {
                return (
                  
                  <div key={key} className="flex " data-aos="fade-up">
                    
                    <BlogThreeCard blogData={single} key={key} />
                  </div>
                );
              }
            })}
        </div>
        <div className={`max-w-7xl mx-auto mt-3 text-right border-[0.5px] rounded-lg ${data.theme === 'light' ? 'border-gray-300' : ' border-gray-700'}`}>
           {/* {totalPages > 1 && 
            <Pagination pageName={location.pathname} currentPage={currentPage} totalPages={totalPages} _setCurrentPage={_setCurrentPage} />
           }  */}
        </div>
      </>
  )
}

export default BlogWrapper
