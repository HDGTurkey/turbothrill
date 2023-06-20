import React from 'react'
import { useState } from 'react';
//import { Link, useSearchParams } from 'react-router-dom';
import { useSearchParams } from 'next/navigation';
import BlogContentListOneCard from '../../app/Components/Blogs/BlogOneCard';
import BlogContentListTwoCard from '../../app/Components/Blogs/BlogTwoCard';
import BlogWrapper from '../../app/Components/BlogWrapper';
import PageTitle from '../../app/Components/PageTitle';
import Breadcrumb from '@/app/Components/breadcrumb';


export const BlogsList = () => {

  const searchParams = useSearchParams();
  const page = searchParams?.get('page');

  return (
    <div className=''>

      
      <Breadcrumb title={'Medium Yazılarımız'} />
      <div>


        {page === "1" &&
          <BlogContentListOneCard />
          // &&
          // <BlogContentListTwoCard />
        }
        <BlogWrapper />
      </div>
    </div>

  )
}

export default BlogsList