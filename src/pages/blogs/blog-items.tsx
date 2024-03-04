import React from "react";
import Link from "next/link";

interface Blog {
  id: string;
  thumbnail: string;
  title: string;
  views: number;
  description: string;
  author: string;
  comment: number;
  pubDate: string;
  link: string;
}

interface Props {
  blog: Blog;
}

const BlogItem: React.FC<Props> = ({ blog }) => {
  const {
    id,
    thumbnail,
    title,
    views,
    author,
    comment,
    pubDate,
    description,
    link,
  } = blog;
  const date = new Date(blog.pubDate);
  const formattedDate = date.toLocaleDateString("tr-TR");
  const cleanDescription = blog.description
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/<img[^>]*>/g, "");
  const maxLength = 400;
  const truncatedDescription =
    cleanDescription.length > maxLength
      ? cleanDescription.slice(0, maxLength) + "..." // İlk 100 karakter + "..." ekleniyor
      : cleanDescription;
  const blogImage = description.match(/<img[^>]+src="([^">]+)"/)?.[1];
  
  return (
    <article key={id} className="postbox__item format-image mb-50 transition-3">
      <div className="postbox__thumb w-img">
        <Link href={link}>
          <div className="flex min-h-[300px]  w-full items-center justify-center overflow-hidden">
            <Link href={link}>
              <img
                className="h-full w-full object-contain"
                src={blogImage}
                alt=""
              />
            </Link>
          </div>
        </Link>
      </div>
      <div className="postbox__content ">
        <div className="postbox__meta">
          <span>
            <i className="fal fa-user-circle"></i> {author}
          </span>
          <span>
            <i className="fal fa-clock"></i>
            {formattedDate}
          </span>
        </div>
        <h3 className="postbox__title">
          <Link href={link}>{title}</Link>
        </h3>
        <div className="postbox__text">
          <p>{truncatedDescription}</p>
        </div>
        <div className="post__button">
          <Link className="tp-btn-yellow text-white" href={link}>
            {" "}
            Daha Fazla
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
