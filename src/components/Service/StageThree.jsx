import React, { useRef, useState } from "react";
import RippleButton from "../RippleButton";
import { useInView, motion } from "framer-motion";
import imgCloud from "../../assets/logo-cloud.png";
import imgCloudY from "../../assets/logo-cloud-y.png";
const data = [
  {
    title: "Quản lý mua hàng (SCM)",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 0.25,
  },
  {
    title: "Quản lý khách hàng (CRM)",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 0.5,
  },
  {
    title: "Quản lý dự án (PM)",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 0.75,
  },
  {
    title: "Quản lý nghiệp vụ (CM)",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 1,
  },
  { title: "Quản lý tuân thủ (CM)", img: imgCloud, imgHover: imgCloudY, dl: 1.25 },
  { title: "Quản lý nguồn nhân lực (HRM)", img: imgCloud, imgHover: imgCloudY, dl: 1.5 },
  {
    title: "Tích hợp E-commerce (ECI)",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 1.75,
  },
  {
    title: "Quản lý tài chính (FM)",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 2,
  },
  {
    title: "Quản lý sản xuất (MRP)",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 2.25,
  },
  { title: "Quản lý kho bãi (IM)", img: imgCloud, imgHover: imgCloudY, dl: 2.5 },
];

const StageThree = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(50px)",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 10 } : {}}
        transition={{ duration: 3, ease: "easeOut" }}
        className="space-y-5 "
      >
        <h2 className="text-[14px] md:text-[24px] lg:text-[32px] font-mont-bold">
          Chuyển Đổi Số Doanh Nghiệp (ERP, CRM){" "}
        </h2>
        <p className="text-[12px] md:text-[14px] lg:text-[16px] font-mont-regular w-full md:w-[70%]">
          Chúng tôi hỗ trợ doanh nghiệp của bạn chuyển đổi số thành công với các
          hệ thống ERP và CRM tiên tiến, giúp tối ưu hóa quy trình quản lý và
          nâng cao hiệu quả hoạt động. Các giải pháp của chúng tôi giúp bạn theo
          dõi tài chính, quản lý nhân sự và tối ưu hóa quy trình kinh doanh.
        </p>
        <div className="md:pt-5">
          <RippleButton className="px-3 md:px-4 lg:px-6 py-2 md:py-3 bg-white text-black text-[12px] md:text-[12px] lg:text-[14px] font-mont-bold">
            Liên hệ ngay
          </RippleButton>
        </div>
      </motion.div>
      <div className="w-full flex justify-between items-center py-10 md:py-20 ">
        <div className="w-full grid grid-cols-2 gap-y-3 md:gap-y-5 gap-x-5 md:gap-x-28">
          {data?.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: item.dl }}
              key={item.title}
              className="background-gradient-r py-4 md:py-6 px-2 md:px-5 flex items-center space-x-2 md:space-x-5 hover:cursor-pointer hover:bg-[#F5DF77]/10 hover:text-[#F5DF77]"
              // Sử dụng onMouseEnter và onMouseLeave để theo dõi hover
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={hoveredIndex === index ? item.imgHover : item.img}
                alt={item.title}
                className="w-[16px] md:w-[24px] lg:w-[32px] text-[#F5DF77]"
              />
              <div>
                <p className="text-[12px] md:text-[14px] lg:text-[20px] font-mont-bold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StageThree;
