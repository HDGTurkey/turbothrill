import Link from 'next/link';
import React from 'react';
interface SingleTeamProps {
          team: {
            id: string;
            img: string;
            name: string;
            title: string;
            delay: string;
            duration: string;
            social_links: {
              link: string;
              target: string;
              icon: string;
            }[];
          };
        }

        const SingleTeam: React.FC<SingleTeamProps> = ({ team }) => {
          const { id, img, name, title, delay, duration, social_links } = team;
  return (
    <div className="col-xl-3 col-lg-3 col-md-6  wow tpfadeUp"
      data-wow-duration={duration} data-wow-delay={delay}>
      <div className="tpteam mb-30">
        <div className="tpteam__shape-1">
          <img src="assets/img/team/team-shape-5.1.png" alt="" />
        </div>
        <div className="tpteam__shape-2">
          <img src="assets/img/team/team-shape-5.2.png" alt="" />
        </div>
        <div className="tpteam__thumb w-full h-[300px] overflow-hidden">
          <img className="w-full h-auto object-cover" src={img} alt="" />
        </div>
        <div className="tpteam__content">
          <h4 className="tp-team-sm-title">
            <Link href={`/about-me/${id}`}>
             {name}
            </Link>
          </h4>
          <h5 className="tp-team-sm-subtitle"><a href="#">{title}</a></h5>
          {social_links.map((l, i) => <a key={i} href={l.link}
            target={l.target}><i className={l.icon}></i></a>)}
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;