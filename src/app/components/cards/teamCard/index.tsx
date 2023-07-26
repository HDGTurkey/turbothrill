import React from 'react';
import { useParams } from 'react-router-dom';
import { useSite } from '../../../context/Context';

interface Props {
   teamData: any;
   key: any;
}

export default function TeamCard({ teamData }: Props) {
   const { theme } = useSite();
   return (
      <div
         className={` flex flex-col  items-center  rounded-xl m-3 p-5  ${
            theme === 'light'
               ? 'bg-white shadow-xl  shadow-gray-300 hover:bg-gray-100 '
               : ' bg-card-dark shadow-2xl hover:bg-gray-800'
         }`}
      >
         <h1 className="font-extrabold text-xl pb-3">{teamData.name}</h1>
         <div className="">
            <img
               className="rounded-full w-[100px] h-[100px]"
               src={require(`../../../assets/${teamData.image}`).default.src}
               alt={teamData.name}
            />
         </div>
         <div className="py-3 font-medium italic antialiased">
            <p>{teamData.designation}</p>
         </div>
         <div className="flex items-center">
            {teamData.linkedin && (
               <button
                  type="button"
                  className="text-white  bg-[#d0daea] hover:bg-[#7ea9ee]/90 focus:ring-2  font-medium rounded-full text-sm px-3 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
                  onClick={() => {
                     window.open(teamData.linkedin, '_blank');
                  }}
               >
                  <svg
                     className=" w-4 h-4"
                     xmlns="http://www.w3.org/2000/svg"
                     x="0px"
                     y="0px"
                     width="23"
                     height="48"
                     viewBox="0 0 48 48"
                  >
                     <path
                        className="hover:fill-blue-800 w-3"
                        fill="#0078d4"
                        d="M8.421,14h0.052l0,0C11.263,14,13,12,13,9.5C12.948,6.945,11.263,5,8.526,5S4,6.945,4,9.5	C4,12,5.736,14,8.421,14z M4,17h9v26H4V17z M44,26.5c0-5.247-4.253-9.5-9.5-9.5c-3.053,0-5.762,1.446-7.5,3.684V17h-9v26h9V28l0,0	c0-2.209,1.791-4,4-4s4,1.791,4,4v15h9C44,43,44,27.955,44,26.5z"
                     ></path>
                  </svg>
               </button>
            )}

            {teamData.github && (
               <button
                  type="button"
                  className="text-white bg-[#202223] hover:bg-[#9999]/90 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm px-3 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
                  onClick={() => {
                     window.open(teamData.github, '_blank');
                  }}
               >
                  <svg
                     className=" w-4 h-4"
                     aria-hidden="true"
                     focusable="false"
                     data-prefix="fab"
                     data-icon="github"
                     role="img"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 496 512"
                  >
                     <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                     ></path>
                  </svg>
               </button>
            )}

            {teamData.twitter && (
               <button
                  type="button"
                  className="text-white bg-[#1da1f2] hover:bg-[#014067]/90 focus:ring-2 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-full text-sm px-3 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
                  onClick={() => {
                     window.open(teamData.twitter, '_blank');
                  }}
               >
                  <svg
                     className="w-4 h-4"
                     aria-hidden="true"
                     focusable="false"
                     data-prefix="fab"
                     data-icon="twitter"
                     role="img"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512"
                  >
                     <path
                        fill="currentColor"
                        d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                     ></path>
                  </svg>
               </button>
            )}
         </div>
      </div>
   );
}
