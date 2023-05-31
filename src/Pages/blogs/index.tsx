import React from 'react'
import { useState } from 'react';
//import { Link, useSearchParams } from 'react-router-dom';
import { useSearchParams } from 'next/navigation';
import BlogContentListOneCard from '../../app/Components/Blogs/BlogOneCard';
import BlogContentListTwoCard from '../../app/Components/Blogs/BlogTwoCard';
import BlogWrapper from '../../app/Components/BlogWrapper';
import PageTitle from '../../app/Components/PageTitle';


export const BlogsList = () => {

  const searchParams = useSearchParams();
  const page = searchParams?.get('page');

  return (
    <>
      <PageTitle title='Blogs List' />
      {page === "1" &&
        <BlogContentListOneCard />
        //  &&
        // <BlogContentListTwoCard />
      }
      <BlogWrapper />
    </>
  )
}

export default BlogsList