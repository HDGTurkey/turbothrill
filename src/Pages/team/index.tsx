import React, { Children, useContext, useEffect, useState } from 'react'
import TeamCard from '../../app/Components/Cards/TeamCard';
import PageTitle from '../../app/Components/PageTitle';
//import TeamData from '../../app/data/team/team.json';
import { AGCContext } from '@/app/Context/AGCProvider';
import { teams } from "../../app/model/teams";


export default function Team() {
  const agcContext = useContext(AGCContext)
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(false)

  async function getTeams() {
    setLoading(true);
    setTeamData(await agcContext.executeQuery(teams));
    setLoading(false);
  }
  useEffect(()=>{
    getTeams();
  },[]);
  return (
    <>
      <div className='mx-8'>
        <PageTitle title='Team' />
        {loading ? "Loading" : 
        <div className='max-w-7xl mx-auto p-3 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pb-56  '>
          {teamData && teamData.map((single, key) => {
            return (
              <div key={key} className="col mb-6" data-aos="fade-up" data-aos-delay="300">
                <TeamCard teamData={single} key={key} ></TeamCard>
              </div>
            );
          })}
          {/* title='Ambassador' name='Elif Emre' photo='https://media-exp1.licdn.com/dms/image/C4D03AQEdC-81qGu3-Q/profile-displayphoto-shrink_800_800/0/1662140248272?e=1676505600&v=beta&t=qCkJuk8H7KMMrrLbBoejg3KVaCRUk964e0ruQjNdero' linkedin='https://www.linkedin.com/in/elifemr/' github='https://github.com/elselif' twitter='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidHIifQ%3D%3D%22%7D' */}
        </div>
        }
      </div>
    </>
  )
}
