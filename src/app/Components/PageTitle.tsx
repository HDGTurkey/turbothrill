import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  img?: string;
}
export const PageTitle = ({ title,img }: Props) => {
  return (
    <div className='flex justify-between max-w-7xl mx-auto text-right px-5 py-5 my-3'> {/* text-right sınıfını ekledik */}
      <h1 className="text-4xl font-bold  inline-block">{title}</h1> {/* inline-block sınıfını ekledik */}
      <a href='https://medium.com/@elselif'>
      
      <button >
      <img src={img} className='w-10' />
      </button>
      </a>
      

    </div>
  )
}

export default PageTitle
