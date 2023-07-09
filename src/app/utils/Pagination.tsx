import { useState } from 'react'
//import { Link, useLocation } from "react-router-dom";
import Link from 'next/link'
import { useSite } from '../context/Context'

export const Pagination: React.FC<{
  pageName: string
  currentPage: number
  totalPages: number
  _setCurrentPage: any
}> = (props) => {
  const pageNumbers = []

  if (props.currentPage === 1) {
    pageNumbers.push(props.currentPage)
    if (props.totalPages >= props.currentPage + 1) {
      pageNumbers.push(props.currentPage + 1)
    }
    if (props.totalPages >= props.currentPage + 2) {
      pageNumbers.push(props.currentPage + 2)
    }
  } else if (props.currentPage > 1) {
    if (props.currentPage >= 3) {
      pageNumbers.push(props.currentPage - 2)
      pageNumbers.push(props.currentPage - 1)
    } else {
      pageNumbers.push(props.currentPage - 1)
    }

    pageNumbers.push(props.currentPage)

    if (props.totalPages >= props.currentPage + 1) {
      pageNumbers.push(props.currentPage + 1)
    }
    if (props.totalPages >= props.currentPage + 2) {
      pageNumbers.push(props.currentPage + 2)
    }
  }

  const data = useSite()
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <Link href={`${props.pageName}?page=1`}>
          <li
            className={` border px-3 py-2 leading-tight rounded-l-lg ${
              data.theme === 'light'
                ? 'text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700  '
                : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white '
            }`}
            onClick={() => props._setCurrentPage(1)}
          >
            <button className="page-link">First Page</button>
          </li>
        </Link>
        {pageNumbers.map((number) => (
          <Link key={number} href={`${props.pageName}?page=${number}`}>
            <li
              key={number}
              onClick={() => {
                props._setCurrentPage(number)
              }}
              className={
                ` border ${
                  data.theme === 'light'
                    ? 'text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700  '
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white '
                } px-3 py-2 leading-tight ${
                  data.theme === 'light'
                    ? 'border-2 border-orange-800'
                    : 'border-2 border-orange-800'
                }` + (props.currentPage === number ? 'active' : '')
              }
            >
              <button className={'page-link '}>{number}</button>
            </li>
          </Link>
        ))}
        <Link href={`${props.pageName}?page=${Math.floor(props.totalPages)}`}>
          <li
            className={`border rounded-r-lg ${
              data.theme === 'light'
                ? 'text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700  '
                : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white '
            } px-3 py-2 leading-tight `}
            onClick={() => props._setCurrentPage(Math.floor(props.totalPages))}
          >
            <button className="page-link">Last Page</button>
          </li>
        </Link>
      </ul>
    </nav>
  )
}
