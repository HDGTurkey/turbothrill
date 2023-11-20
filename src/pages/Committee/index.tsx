import Breadcrumb from "@/app/components/breadcrumb";
import CommitteAbout from "./comitteAbout";
import ServiceArea from "./comitelist";
import NewsLetter from "./whichComite";

const Committee = () => {
  return (
    <>
      {/* <HeaderSix /> */}
      <Breadcrumb title={"Committee"} />
      <CommitteAbout />

      <ServiceArea />
      <NewsLetter />
    </>
  );
};

export default Committee;