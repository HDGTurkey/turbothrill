import Link from 'next/link';
import React from 'react';

interface SingleTeamProps {
  team: {
    id: number;
    img: string;
    name: string;
    designation: string;
    twitter: string;
    linkedin: string;
    github: string;
  };
}



const SingleTeam: React.FC<SingleTeamProps> = ({ team }: any) => {
  const { id, img, name, designation, twitter, linkedin, github } = team;
  return (
    <div className="col-xl-3 col-lg-3 col-md-6  wow tpfadeUp"
      data-wow-duration={"0.7s"} data-wow-delay={"0.7s"}>
      <div className="tpteam mb-20">
        <div className="tpteam__shape-1">
          <img src="assets/img/team/team-shape-5.1.png" alt="" />
        </div>
        <div className="tpteam__shape-2">
          <img src="assets/img/team/team-shape-5.2.png" alt="" />
        </div>
        <div className="tpteam__thumb w-full h-[300px] overflow-hidden">
          {img && <img className="w-full h-auto object-cover" src={require(`../../${img}`).default.src} alt="" />}
        </div>
        <div className="tpteam__content">
          <h4 className="tp-team-sm-title">
            <Link href="#">
              {name}
            </Link>
          </h4>
          <h5 className="tp-team-sm-subtitle"><a href="#">{designation}</a></h5>
          <a href={twitter} ><i className='fab fa-twitter'></i></a>
          <a href={linkedin} ><i className='fab fa-linkedin'></i></a>
          <a href={github} ><i className='fab fa-github'></i></a>
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;