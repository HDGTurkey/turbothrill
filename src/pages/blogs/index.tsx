import React, { useEffect, useState } from "react";
import BlogItems from "./blog-items";
import Breadcrumb from "@/app/components/breadcrumb";
import { AGCContext } from "@/app/context/AGCProvider";
import { medium } from "../../app/model/medium";
import { useContext } from "react";

interface Api {
  id: string;
  api: string;
}

const BlogArea = () => {
  const [mediumData, setMediumData] = useState([]);
  const agcContext = useContext(AGCContext);
  const [mediumApi, setMediumApi] = useState<Array<Api>>([]);

  const [loading, setLoading] = useState(false);

  async function getApi() {
    setLoading(true);
    setMediumApi(await agcContext.executeQuery(medium));
    setLoading(false);
  }
  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    if (mediumApi.length > 0) {
      fetch(mediumApi[0].api)
        .then((res) => res.json())
        .then((response) => {
          setMediumData(response.items);
        })
        .catch((err) => console.log(err));
    }
  }, [mediumApi]);

  const finalData = mediumData.slice(0, 10);

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
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArea;
