import React from "react";
import { useSite } from "../../../context/Context";

interface BlogListCardProps {
  blogs: any;
  loading?: boolean;
}

export const BlogListCard = ({ blogs, loading }: BlogListCardProps) => {
  const data = useSite();
  // if (loading) {
  //     return <h2>Loading...</h2>
  // }

  return (
    <>
      {loading && (
        <div className="h-12 w-12 animate-pulse rounded-full bg-gray-300">
          {" "}
          loading{" "}
        </div>
      )}

      <ul className="p-3 ">
        <div className="mx-auto mb-12 max-w-7xl columns-1 md:columns-3 lg:columns-4 ">
          {blogs.map((blog: any) => (
            <li key={blog.id}>
              <div className="max-w[1200px] mb-8 flex flex-wrap justify-center gap-8">
                <div
                  className={`flex flex-col overflow-hidden shadow-xl ${
                    data.theme === "light"
                      ? "text-dark bg-gradient-to-r from-gray-100 to-gray-400"
                      : "to-gray-90 bg-gradient-to-r from-gray-800 text-white"
                  } rounded-lg`}
                >
                  <div className="card__header">
                    <img
                      className="h-auto w-full rounded-md"
                      src={`https://source.unsplash.com/random/${blog.id}`}
                      alt="blog.png"
                    />
                  </div>
                  <div className="card__body flex flex-col gap-3 p-4 ">
                    <span
                      className={`self-start rounded-lg bg-gradient-to-r from-cyan-500  to-blue-500 px-1 py-1 text-sm text-white`}
                    >
                      Technology
                    </span>
                    <h4
                      className={`text-2xl capitalize  ${
                        data.theme === "light" ? " " : " "
                      }`}
                    >
                      {" "}
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
                  <div className="border-t-2 py-1">
                    <div className="flex p-3">
                      <img
                        className="h-[50px] w-[50px] rounded-3xl"
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
  );
};

export default BlogListCard;
