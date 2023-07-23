import React, { useContext, useEffect, useState } from 'react'
import SingleTeam from './single-team'
import Breadcrumb from '@/app/Components/breadcrumb'

// const teams = team_data.filter(team => team.about_p);
import { AGCContext } from '@/app/Context/AGCProvider'
import { teams } from '../../app/model/teams'

const TeamArea: React.FC = () => {
  const agcContext = useContext(AGCContext)
  const [teamData, setTeamData] = useState([])
  const [loading, setLoading] = useState(false)

  async function getTeams() {
    setLoading(true)
    setTeamData(await agcContext.executeQuery(teams))
    setLoading(false)
  }
  useEffect(() => {
    getTeams()
    console.log(teamData);
    console.log(teamData);
    console.log(teamData);
    console.log(teamData);
    console.log(teamData);
    console.log(teamData);
    
    
  }, [])

  return (
    <>
      <Breadcrumb title={'Our Team'} />
      <div className="ac-team-area pt-130 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
             
            </div>
          </div>
          <div className="row">
            {teamData.map((team, key) => (
              <SingleTeam key={key} team={team} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamArea
