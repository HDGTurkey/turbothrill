import React, { FC } from 'react';

interface IndustryItemProps {
  duration: string;
  delay: string;
  number?: string;
  title: string;
}

const CommitteeItem: FC<IndustryItemProps> = ({ duration, delay, number, title }) => {
  return (
    <a href="#">
      <div className={`tpindustri wow tpfadeUp`} data-wow-duration={duration} data-wow-delay={delay}>
        <div className="tpindustri__content">
          <h3 className={`tp-industri-title ${number ? `tp-ind-color-${number}` : ''}`}>{title}</h3>
        </div>
      </div>
    </a>
  );
};

const Committe: FC = () => {
  return (
    <div className="tp-industri-area pb-130 pt-130 p-relative">
      <div className="bs-industri-1 d-none d-lg-block">
        <img src="assets/img/chose/hero-shape-5.1.png" alt="" />
      </div>
      <div className="container tp-industri-bg">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-project-section-box text-center">
              <h2 className="tp-title-sm pb-60">Committee</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center tp-industri-space">
          <div className="col-12">
            <CommitteeItem duration={'.3s'} delay={'.5s'} title={'Chemical Industry'} />
            <CommitteeItem duration={'.5s'} delay={'.7s'} number={'one'} title={'Supply Chain Solutions'} />
            <CommitteeItem duration={'.7s'} delay={'.9s'} number={'two'} title={'Manufacturing'} />
            <CommitteeItem duration={'.9s'} delay={'1s'} number={'three'} title={'Telecom Cable'} />
            <CommitteeItem duration={'1s'} delay={'1.1s'} number={'four'} title={'Healthcare'} />
            <CommitteeItem duration={'1.1s'} delay={'1.2s'} number={'five'} title={'Banking'} />
            <CommitteeItem duration={'1.2s'} delay={'1.3s'} number={'six'} title={'Human Capital Management'} />
            <CommitteeItem duration={'1.3s'} delay={'1.3s'} number={'seven'} title={'Fed and State GOVT'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committe;