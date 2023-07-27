import Link from 'next/link';
import React from 'react';

interface ChoseItemProps {
  duration: string;
  delay: string;
  item_num?: string;
  icon: string;
  title: React.ReactNode;
  text: string;
  color?: string;
}

const ChoseItem: React.FC<ChoseItemProps> = ({ duration, delay, item_num, icon, title, text, color }) => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp"
      data-wow-duration={duration} data-wow-delay={delay}>
      <div className="tp-chose-item mb-30">
        <div className={`tpchosebox ${item_num && item_num}`}>
          <div className={`tpchosebox__icon ${color && color} mb-30`}>
            <a href="#"><i className={icon}></i></a>
          </div>
          <div className="tpchosebox__content">
            <h4>
             
               {title}
             
            </h4>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesArea: React.FC = () => {
  return (
    <>
      <div className="ac-chose-area mb-130">
        <div className=" ac-chose-bg">
          <div className="row">
            <ChoseItem duration='.3s' delay='.5s' icon='flaticon-group' title={<>Connection <br /> </>}
              text={'Community ambassadors become part of a global ecosystem with apps like "Chi Chi Match", "Learnship Buddy". Thanks to this, he can have regular meetings with other HSD ambassadors and attend social events with all the members involved in the program.'} />
            <ChoseItem duration='.5s' delay='.7s' item_num={'tpchosebox-three'} color="fea-color-5" icon='fas fa-star' title={<>Learning <br /> </>} text={`Community ambassadors and members can receive training in many areas a student may need and participate in all HSD-related events.

It also gets the opportunity to participate in the HSD Summit held at HUAWEI Turkey R&D Center every year.`} />
            <ChoseItem duration='.7s' delay='.9s' item_num={'tpchosebox-two'} color="fea-color-4" icon='flaticon-web' title={<>Career <br /> </>} text={`Community ambassadors receive an official, global certification from Huawei from the moment they become an ambassador.
Ambassadors who successfully complete the program will be given priority in job opportunities if they apply for positions at HUAWEI, provided that their skills match the job position.`} /> <br />
            <ChoseItem duration='.9s' delay='1s' icon='fas fa-star' title={<>Supports <br /><br/> </>}
              text={`Speaker support, gifts to be distributed at the event, planning support, communication network support from Huawei under certain conditions in the events organized by the communities.`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;
