import React, { useRef, useState } from "react";
import RippleButton from "../RippleButton";
import { useInView, motion } from "framer-motion";
import imgCloud from "../../assets/logo-cloud.png";
import imgCloudY from "../../assets/logo-cloud-y.png";
import bigEcom from "../../assets/logo-ecom-big.png";
const data = [
  { title: "Cửa hàng trực tuyến", img: imgCloud, imgHover: imgCloudY, dl: 0.5 },
  { title: "Quản lý kho hàng", img: imgCloud, imgHover: imgCloudY, dl: 1 },
  {
    title: "Quản lý khách hàng",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 1.5,
  },
  {
    title: "Tích hợp thanh toán",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 2,
  },
];

const StageTwo = () => {
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
      <div className="flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 10 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
          className="space-y-5 w-[70%]"
        >
          <h2 className="text-[14px] md:text-[24px] lg:text-[32px] font-mont-bold">
            Lập Trình Web Ecommerce{" "}
          </h2>
          <p className="text-[12px] md:text-[12px] lg:text-[16px]  font-mont-regular w-[70%]">
            Chúng tôi cung cấp các giải pháp thương mại điện tử toàn diện, giúp
            bạn xây dựng và quản lý cửa hàng trực tuyến chuyên nghiệp. Với hệ
            thống thanh toán an toàn, tích hợp quản lý đơn hàng thông minh và
            các công cụ marketing tích hợp, cửa hàng của bạn sẽ luôn sẵn sàng
            phục vụ khách hàng 24/7.
          </p>
          <div className="pt-1 md:pt-5">
            <RippleButton className="px-3 md:px-4 lg:px-6 py-2 md:py-3 bg-white text-black text-[12px] md:text-[12px] lg:text-[14px] font-mont-bold ">
              Liên hệ ngay
            </RippleButton>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 10 }}
          className="w-[30%] block md:hidden "
        >
          <img src={bigEcom} alt="big ecomm" className="w-[105px]" />
        </motion.div>
      </div>
      <div className="w-full flex justify-between items-center py-10 space-x-10">
        <div className="w-full md:w-[40%]">
          <div className="grid grid-cols-2 md:grid-cols-1  gap-y-3 md:gap-y-5">
            {data?.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: item.dl }}
                key={item.title}
                className="background-gradient-r py-3 md:py-5 px-2 md:px-5 flex items-center space-x-2 md:space-x-5 hover:cursor-pointer hover:bg-[#F5DF77]/10 hover:text-[#F5DF77]"
                // Sử dụng onMouseEnter và onMouseLeave để theo dõi hover
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={hoveredIndex === index ? item.imgHover : item.img}
                  alt={item.title}
                  className="w-[16px] md:w-[24px] lg:w-[32px] text-[#F5DF77] "
                />
                <div>
                  <p className="text-[12px] md:text-[14px] lg:text-[20px] font-mont-bold">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 10 }}
          className="w-[40%] hidden md:block"
        >
          <img src={bigEcom} alt="big ecomm" className="w-[405px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default StageTwo;
