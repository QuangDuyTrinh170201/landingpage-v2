import bigLogo from "../../assets/logo-big.png";
import bgMain from "../../assets/background-main.png";
import { motion } from "framer-motion";

const SectionOne = () => {
  const variants = {
    up: { y: -10 }, // Di chuyển lên
    down: { y: 10 }, // Di chuyển xuống
  };
  return (
    <>
      {/* Bản Web */}
      <div className="w-full flex flex-col justify-center items-center ">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="hidden">Golden Cloud Solutions - Giải pháp phần mềm toàn diện cho doanh nghiệp</h1>
          <h2 className="text-gradient text-[26px] md:text-[35px] lg:text-[40px] font-mont-bold">
            GOLDEN CLOUD
          </h2>
          <p className="text-[14px] sm:text-[14px] md:text-[19px] lg:text-[24px] font-mont-bold">
            BIẾN Ý TƯỞNG CỦA BẠN THÀNH HIỆN THỰC
          </p>
        </div>
        <div className="w-full relative mt-10 ">
          <div className="relative w-full flex justify-center">
            <motion.img
              src={bigLogo}
              alt="Logo Lớn"
              className="w-[290px] z-10 md:w-[440px] lg:w-[660px]"
              variants={variants}
              animate={["up", "down"]} // Chuyển động giữa hai trạng thái
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }} // Thời gian và kiểu lặp lại
            />
            <img
              src={bgMain}
              alt="Bg Main"
              className="absolute w-full z-0 -bottom-5 md:-bottom-20 lg:-bottom-20 xl:-bottom-36 md:w-full "
            />
          </div>
          <div className="z-20 absolute top-2 left-0 px-3 py-2 text-[12px] background-gradient-l font-mont-bold md:text-[16px] md:px-6  lg:text-[20px] lg:px-10 lg:py-4 lg:top-5 lg:left-[5%] xl:left-[7%]">
            Thiết Kế Website
          </div>
          <div className="z-20 absolute -bottom-10 -left-[5%] px-3 py-1 text-[12px] background-gradient-l font-mont-bold md:text-[16px] md:px-6 lg:text-[20px] lg:px-10 lg:py-2 lg:bottom-32 lg:-left-[5%] xl:left-[2%]">
            Chuyển Đổi Số Doanh<br /> Nghiệp (ERP, CRM)
          </div>
          <div className="z-20 absolute top-2 right-[2%] px-3 py-2 text-[12px] background-gradient-r font-mont-bold md:text-[16px] md:px-6 lg:text-[20px] lg:px-10 lg:py-4 lg:top-5 lg:right-[0%]">
            Lập Trình Web <br className="block md:hidden" /> Ecommerce
          </div>
          <div className="z-20 absolute -bottom-10 -right-0 px-3 py-2 text-[12px] background-gradient-r font-mont-bold md:text-[16px] md:px-6 lg:text-[20px] lg:px-10 lg:py-4 lg:bottom-32 lg:right-[5%] ">
            Digital Marketing 
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SectionOne;
