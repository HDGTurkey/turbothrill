import Link from "next/link";
import React from "react";
import TeamImage from "./TeamImage";

interface SingleTeamProps {
  team: {
    id: number;
    img: string;
    name: string;
    designation: string;
    twitter: string;
    linkedin: string;
    github: string;
    mail: string;
  };
}

const SingleTeam: React.FC<SingleTeamProps> = ({ team }: any) => {
  const { id, img, name, designation, twitter, linkedin, github, mail } = team;
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div
      className="col-xl-3 col-lg-3 col-md-6 wow  tpfadeUp mx-auto mr-5 "
      data-wow-duration={"0.7s"}
      data-wow-delay={"0.7s"}
    >
      <div className="tpteam mb-20 ">
        <div className="tpteam__shape-1">
          <img src="assets/img/team/team-shape-5.1.png" alt="" />
        </div>
        <div className="tpteam__shape-2">
          <img src="assets/img/team/team-shape-5.2.png" alt="" />
        </div>
        <div className="tpteam__thumb h-[300px] w-full overflow-hidden">
          {team.img ? (
            <div>
              <TeamImage imgPath={team.img as string} width="450px" alt="" />
            </div>
          ) : (
            <div>No image available</div>
          )}
        </div>
        <div className="tpteam__content">
          <h4 className="tp-team-sm-title">
            <Link href="#">{name}</Link>
          </h4>

          <div>
            <button
              className="btn btn-primary mt-3"
              onClick={() => setShowModal(true)}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none ">
            <div className="relative mx-auto my-6 w-72 max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}

                {/*body*/}
                <div className="relative mx-auto my-3 flex ">
                  <TeamImage
                    imgPath={team.img}
                    width="150px"
                    height="150px"
                    alt=""
                  />
                </div>

                <div>
                  <h3 className="text-center text-xl font-medium leading-8 text-gray-900">
                    {name}
                  </h3>
                  <div className="text-center text-xs font-semibold text-gray-400">
                    <p>{designation}</p>
                  </div>
                  <table className="mx-auto my-3 text-xs">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2 font-semibold text-gray-500">
                          Email
                        </td>
                        <td className="px-2 py-2">{mail}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="my-3 space-x-5 text-center">
                    <a href={twitter}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={linkedin}>
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={github}>
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                {/*footer*/}
                <div className="border-slate-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="active:bg-emerald-600 mb-1 mr-1 rounded bg-red-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </div>
  );
};

export default SingleTeam;
