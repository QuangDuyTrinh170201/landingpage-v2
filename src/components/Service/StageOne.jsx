import React, { useRef, useState } from "react";
import RippleButton from "../RippleButton";
import imgCloud from "../../assets/logo-cloud.png";
import imgCloudY from "../../assets/logo-cloud-y.png";
import { useInView, motion } from "framer-motion";

const data = [
  { title: "Thiết kế tiêu chuẩn", img: imgCloud, imgHover: imgCloudY, dl: 0.5 },
  { title: "Marketing và SEO", img: imgCloud, imgHover: imgCloudY, dl: 1 },
  {
    title: "Thu thập thông tin khách hàng",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 1.5,
  },
];

const StageOne = () => {
  // Tạo một state cho trạng thái hover của từng mục
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
      className="flex items-center justify-between "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 10 } : {}}
        transition={{ duration: 3, ease: "easeOut" }}
        className="w-[50%] space-y-5"
      >
        <h2 className="text-[14px] md:text-[24px] lg:text-[32px] font-mont-bold hover:text-[#F5DF77] hover:cursor-pointer">
          Thiết Kế Website
        </h2>
        <p className="text-[12px] md:text-[14px] lg:text-[16px] font-mont-regular">
          Chúng tôi tạo ra các trang web hiện đại, dễ sử dụng và thân thiện với
          người dùng. Từ ý tưởng ban đầu đến sản phẩm hoàn thiện, chúng tôi đảm
          bảo trang web của bạn không chỉ đẹp mắt mà còn hoạt động hiệu quả,
          giúp nâng cao trải nghiệm người dùng và tăng cường tương tác.
        </p>
        <RippleButton className="px-3 md:px-4 lg:px-6 py-2 md:py-3 bg-white text-black text-[12px] md:text-[12px] lg:text-[14px] font-mont-bold">
          Liên Hệ Ngay
        </RippleButton>
      </motion.div>
      <div className="w-[49%] md:w-[40%]">
        <div className="space-y-5">
          {data?.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: item.dl }}
              key={item.title}
              className="background-gradient-r py-2 md:py-5 px-2 md:px-5 flex items-center space-x-3 md:space-x-5 hover:cursor-pointer hover:bg-[#F5DF77]/10 hover:text-[#F5DF77]"
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
                <h2 className="text-[12px] md:text-[14px] lg:text-[20px] font-mont-bold">{item.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StageOne;
