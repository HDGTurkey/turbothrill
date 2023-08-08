import Breadcrumb from "@/app/components/breadcrumb";
import ServiceArea from "./comitelist";
import CommitteAbout from "./comitteAbout";

const Committee = () => {
  return (
    <>
      {/* <HeaderSix /> */}
      <Breadcrumb title={"Committee"} />
      <CommitteAbout></CommitteAbout>

      <ServiceArea></ServiceArea>
    </>
  );
};

export default Committee;
