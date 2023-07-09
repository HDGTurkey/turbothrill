import React from 'react'
import Link from 'next/link'

interface Blog {
  id: string
  thumbnail: string
  title: string
  views: number
  description: string
  author: string
  comment: number
  pubDate: string
}

interface Props {
  blog: Blog
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
  } = blog
  const date = new Date(blog.pubDate)
  const formattedDate = date.toLocaleDateString('tr-TR')
  const cleanDescription = blog.description
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/<img[^>]*>/g, '')
  const maxLength = 400
  const truncatedDescription =
    cleanDescription.length > maxLength
      ? cleanDescription.slice(0, maxLength) + '...' // İlk 100 karakter + "..." ekleniyor
      : cleanDescription
  return (
    <article key={id} className="postbox__item format-image mb-50 transition-3">
      <Link href={`/blog-details/${id}`}>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="postbox__thumb w-img col-span-1">
            <div className="w-full min-h-[300px]  flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={thumbnail}
                alt=""
              />
            </div>
          </div>
          <div className="postbox__content col-span-2">
            <div className="postbox__meta p-3 md:text-left">
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
            <h3 className="postbox__title md:text-left px-3">
              <Link href={`/blog-details/${id}`}>{title}</Link>
            </h3>
            <div className="postbox__text md:text-left px-3">
              <p>{truncatedDescription}</p>
            </div>
            <div className="text-right md:mr-10 ">
              <a className="bg-red-700 text-white hover:bg-red-900 px-5 py-2 ">
                Daha Fazla
              </a>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default BlogItem
