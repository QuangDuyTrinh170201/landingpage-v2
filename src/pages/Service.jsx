import { Helmet } from "react-helmet";
import StageFour from "../components/Service/StageFour";
import StageOne from "../components/Service/StageOne";
import StageThree from "../components/Service/StageThree";
import StageTwo from "../components/Service/StageTwo";

const Service = () => {
  return (
    <div>
      <div className="py-10 px-5 md:px-10 lg:px-20 max-md:py-6 z-50 space-y-20 ">
        <h1 className="text-[16px] md:text-[20px] lg:text-[26px] font-mont-bold text-[#F5DF77] text-center">
          Golden Cloud Solutions - Dịch Vụ
        </h1>
        <div className="md:pb-20">
          <StageOne />
        </div>
        <div>
          <StageTwo />
        </div>
        <div>
          <StageThree />
        </div>
        <div>
          <StageFour />
        </div>
      </div>
    </div>
  );
};

export default Service;
