import React, { useContext, useEffect, useState } from "react";
import SingleTeam from "./single-team";
import Breadcrumb from "@/app/Components/breadcrumb";

// const teams = team_data.filter(team => team.about_p);
import { AGCContext } from "@/app/Context/AGCProvider";
import { teams } from "../../app/model/teams";

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
      <Breadcrumb title={"Ekibimiz"} />
      <div className="ac-team-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="ac-team-title-section text-center mb-60">
                <h3 className="ac-team-title">People are the key to success</h3>
              </div>
            </div>
          </div>
          <div className="row">
          {teamData.map((team, key) => <SingleTeam key={key} team={team} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamArea;
