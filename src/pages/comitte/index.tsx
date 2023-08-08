import Breadcrumb from "@/app/components/breadcrumb";
import ServiceArea from "./comitelist";
import CommitteAbout from "./comitteAbout";

const comitte = () => {
  return (
    <>
      {/* <HeaderSix /> */}
      <Breadcrumb title={"Comitte"} />
      <CommitteAbout></CommitteAbout>

      <ServiceArea></ServiceArea>
     
      
     
    </>
  );
};

export default comitte;
