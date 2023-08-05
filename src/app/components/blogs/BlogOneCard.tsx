import React from "react";
//import { Link } from 'react-router-dom';
import { useSite } from "../../context/Context";
import Link from "next/link";

let BlogContentListOne = [
  {
    image: "assets/Images/employees.jpeg",
    largeImage: "assets/Images/blog/770/blog-3.jpg",
    imgAlt: "Blog Thumb",
    author: "Yakup Sarı",
    date: "15 May 2023",
    view: "70 views",
    categories: ["Startup", "Marketing"],
    title: "Distinctive redefine resource maximizing for",
    slug_title:
      "the-six-things-marketers-need-to-understand-about-dtc-marketing-5",
    excerpt:
      "Beautiful and usable design can be the deciding factor between a successful and a failing business. Great designers are treated like superstars. And it’s so fulfilling to design beautiful things that people love to use.",
    body: [
      "<p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>",
      "<p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p>",
      "<p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>",
      "<p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>",
      "<p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures — in which Marketing always played second fiddle to Sales — allowed that falsehood to persist.</p>",
      "<p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>",
    ],
    tags: ["App", "Branding", "Development", "Design"],
    btnText: "Devamını Oku",
    pubDate: "15 May 2023",
    pubAuthor: "Yakup Sarı",
  },
];
export const BlogOneCard = () => {
  const data = useSite();
  return (
    <>
      <div className=" mx-auto max-w-7xl py-3">
        {BlogContentListOne.map((val: any, key) => (
          <Link
            key={key}
            href={`/blog-details/${val.slug_title}`}
            className={`grid grid-cols-1 rounded-sm p-5 transition-all   lg:grid-cols-2 ${
              data.theme === "light"
                ? "bg-gray-100  shadow-md hover:bg-gray-200 "
                : " bg-[#262626] from-gray-800 text-white hover:bg-[#333333] "
            } `}
          >
            <div className="overflow-hidden">
              <img
                src={require("../../assets/Images/employees.jpeg").default.src}
                alt={val.imgAlt}
                className="transform-gpu transition-transform hover:scale-125"
              />
            </div>
            <div className="mx-auto my-auto px-10 text-left ">
              <Link href={`/blog-details/${val.slug_title}`}>
                <h3 className="py-3 text-2xl font-bold uppercase">
                  {val.title}
                </h3>
              </Link>
              <div className="meta-post">
                <a href="/home" className="border-r-2 border-green-900 pr-2">
                  {val.pubAuthor}
                </a>
                <a href="/home" className="pl-2">
                  {" "}
                  {val.pubDate}
                </a>
              </div>
              <div className="py-3">{val.excerpt}</div>
              <div className="pb-5 pt-5">
                <button
                  type="button"
                  className="hover:bg-[#cc2e32 inline-flex items-center rounded-md  bg-[#ec373c] px-5 py-2.5 pb-3 text-center text-sm font-medium text-white"
                >
                  {val.btnText}
                  <svg
                    aria-hidden="true"
                    className="-mr-1 ml-2 h-5 w-5"
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
        ))}
      </div>
    </>
  );
};

export default BlogOneCard;
