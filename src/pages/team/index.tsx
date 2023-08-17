"useclient";

import React, { useContext, useEffect, useState } from "react";
import SingleTeam from "./single-team";
import Breadcrumb from "@/app/components/breadcrumb";

// const teams = team_data.filter(team => team.about_p);
import { AGCContext } from "@/app/context/AGCProvider";
import { teams } from "../../app/model/teams";
import TestimonialArea from "./testiminioal-area";
import ClientFeedback from "./testiminioal-area";

import agconnect from "@agconnect/api";
import "@agconnect/instance";
import "@agconnect/auth";
import "@agconnect/cloudstorage";

const TeamArea: React.FC = () => {
  const agcContext = useContext(AGCContext);
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getTeams() {
    setLoading(true);
    setTeamData(await agcContext.executeQuery(teams));
    setLoading(false);
  }
  useEffect(() => {
    getTeams();
  }, []);

  return (
    <>
      <Breadcrumb title={"Our Team"} />
      <div className="ac-team-area  ">
        <div className=" mt-130 container">
          <div className="team-section-box pb-25 text-center ">
            <h2 className="tp-title text-black">
              Meet Our
              <span className="tp-section-highlight ml-3">
                Team
                <svg
                  width="141"
                  height="11"
                  viewBox="0 0 141 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L141 11H0V0Z" fill="#FFDC60" />
                </svg>
              </span>
            </h2>
          </div>
          <div className="row mx-auto space-x-3">
            {teamData.map((team, key) => (
              <SingleTeam key={key} team={team} />
            ))}
          </div>
        </div>
        <TestimonialArea />
      </div>
    </>
  );
};

export default TeamArea;
