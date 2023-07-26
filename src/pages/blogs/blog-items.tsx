import React from 'react';
import Link from 'next/link';

interface Blog {
   id: string;
   thumbnail: string;
   title: string;
   views: number;
   description: string;
   author: string;
   comment: number;
   pubDate: string;
}

interface Props {
   blog: Blog;
}

const BlogItem: React.FC<Props> = ({ blog }) => {
   const { id, thumbnail, title, views, author, comment, pubDate, description } = blog;
   const date = new Date(blog.pubDate);
   const formattedDate = date.toLocaleDateString('tr-TR');
   const cleanDescription = blog.description.replace(/<\/?[^>]+(>|$)/g, '').replace(/<img[^>]*>/g, '');
   const maxLength = 400;
   const truncatedDescription =
      cleanDescription.length > maxLength
         ? cleanDescription.slice(0, maxLength) + '...' // İlk 100 karakter + "..." ekleniyor
         : cleanDescription;
   return (
      <article key={id} className="postbox__item format-image mb-50 transition-3">
         <div className="postbox__thumb w-img">
            <Link href={`/blog-details/${id}`}>
               <div className="w-full min-h-[300px]  flex items-center justify-center overflow-hidden">
                  <img className="w-full h-full object-contain" src={thumbnail} alt="" />
               </div>
            </Link>
         </div>
         <div className="postbox__content ">
            <div className="postbox__meta">
               <span>
                  <a href="#">
                     <i className="fal fa-user-circle"></i> {author}
                  </a>
               </span>
               <span>
                  <a href="#">
                     <i className="fal fa-clock"></i>
                     {formattedDate}
                  </a>
               </span>
            </div>
            <h3 className="postbox__title">
               <Link href={`/blog-details/${id}`}>{title}</Link>
            </h3>
            <div className="postbox__text">
               <p>{truncatedDescription}</p>
            </div>
            <div className="post__button">
               <a className="tp-btn-yellow text-white"> Daha Fazla</a>
            </div>
         </div>
      </article>
   );
};

export default BlogItem;
