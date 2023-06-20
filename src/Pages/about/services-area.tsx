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
        <div className="container ac-chose-bg">
          <div className="row">
            <ChoseItem duration='.3s' delay='.5s' icon='flaticon-group' title={<>Bağlantı <br /> </>}
              text={'Benzer bir teknoloji tutkusuna sahip öğrenci geliştiricilerle tanışın, fikir alışverişinde bulunun ve yeni projeler üzerinde işbirliği yapın.'} />
            <ChoseItem duration='.5s' delay='.7s' item_num={'tpchosebox-three'} color="fea-color-5" icon='fas fa-star' title={<>Öğrenme <br /> </>} text={'İlgi çekici teknik çalıştaylar, zirveler ve eğitim oturumları aracılığıyla çok çeşitli teknik konularda yeni beceriler ve bilgiler edinin.'} />
            <ChoseItem duration='.7s' delay='.9s' item_num={'tpchosebox-two'} color="fea-color-4" icon='flaticon-web' title={<>Büyüme <br /> </>} text={'Kariyerinizi hızlandırmak için başarılı geliştiricilerle ortaklık kurarak teknik becerilerinizi sürekli olarak geliştirin.'} />
            <ChoseItem duration='.9s' delay='1s' icon='fas fa-star' title={<>Gelişme <br /> </>}
              text={'100% Client Satisfied'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;
