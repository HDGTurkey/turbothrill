import React from 'react'

interface Props {
  title: string;
}
export const PageTitle = ({ title }: Props) => {
  return (
    <div className=' max-w-7xl mx-auto text-left px-5 py-5'>
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
    </div>
  )
}

export default PageTitle
