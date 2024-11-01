import React, { useRef, useState } from "react";
import RippleButton from "../RippleButton";
import { useInView, motion } from "framer-motion";
import imgCloud from "../../assets/logo-cloud.png";
import imgCloudY from "../../assets/logo-cloud-y.png";
import bigMarketing from "../../assets/logo-marketing-big.png";
const data = [
  {
    title: "Viết bài SEO",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 0.5,
    dc: "Sáng tạo nội dung chất lượng cao, hấp dẫn và phù hợp với đối tượng khách hàng mục tiêu.",
    dc2: "Đảm bảo nội dung tuân thủ các quy tắc SEO để tối ưu hóa hiển thị trên các công cụ tìm kiếm.",
  },
  {
    title: "Design và viết content social cho Fanpage FB",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 1,
    dc: "Thiết kế và quản lý fanpage chuyên nghiệp, thu hút.",
    dc2: "Phát triển nội dung và chiến lược để tăng tương tác và số lượng người theo dõi.",
  },
  {
    title: "Sáng tạo nội dung video, xây kênh Tiktok",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 1.5,
    dc: "Sản xuất video quảng cáo sáng tạo và chất lượng cao.",
    dc2: "Chụp ảnh sản phẩm, sự kiện và các hoạt động doanh nghiệp để sử dụng trong chiến dịch marketing.",
  },
  {
    title: "Chạy quảng cáo trên các nền tảng mạng xã hội",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 2,
    dc: "Quản lý, tối ưu hóa các chiến dịch quảng cáo trên Facebook, Instagram, TikTok, và các nền tảng khác.",
    dc2: "Phân tích hiệu quả chiến dịch và điều chỉnh chiến lược để đạt hiệu quả cao nhất.",
  },
  {
    title: "SEO content, SEO tích hợp với website",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 2.5,
    dc: "Tối ưu hóa nội dung trang web để tăng cường hiển thị trên các công cụ tìm kiếm.",
    dc2: "Tích hợp các kỹ thuật SEO để cải thiện thứ hạng trang web và tăng lượng truy cập.",
  },
  {
    title: "Thống kê dữ liệu khách hàng và gợi ý chiến lược marketing",
    img: imgCloud,
    imgHover: imgCloudY,
    dl: 3,
    dc: "Thu thập và phân tích dữ liệu khách hàng để hiểu rõ nhu cầu và hành vi.",
    dc2: "Đề xuất chiến lược marketing dựa trên dữ liệu phân tích để tối ưu hóa các chiến dịch tương lai.",
  },
];

const StageFour = () => {
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
      <div className="w-full flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 10 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
          className="space-y-5 w-[60%]"
        >
          <h2 className="text-[14px] md:text-[24px] lg:text-[32px] font-mont-bold">Marketing Trọn Gói</h2>
          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-mont-regular ">
            Chúng tôi tạo ra các trang web hiện đại, dễ sử dụng và thân thiện
            với người dùng. Từ ý tưởng ban đầu đến sản phẩm hoàn thiện, chúng
            tôi đảm bảo trang web của bạn không chỉ đẹp mắt mà còn hoạt động
            hiệu quả, giúp nâng cao trải nghiệm người dùng và tăng cường tương
            tác.
          </p>
          <div className="md:pt-5">
            <RippleButton className="px-3 md:px-4 lg:px-6 py-2 md:py-3 bg-white text-black text-[12px] md:text-[12px] lg:text-[14px] font-mont-bold">
              Liên hệ ngay
            </RippleButton>
          </div>
        </motion.div>
        <div className="w-[40%] flex items-center justify-center ">
          <img
            src={bigMarketing}
            alt="big Marketing logo"
            className="w-[165px] md:w-[425px]" 
          />
        </div>
      </div>
      <div className="w-full flex justify-between items-center py-20 space-x-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {data?.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: item.dl }}
              key={index}
              className="flex flex-col background-gradient-r py-5 md:py-10 px-5 space-y-2 md:space-y-5 hover:cursor-pointer hover:bg-[#F5DF77]/10 "
              // Sử dụng onMouseEnter và onMouseLeave để theo dõi hover
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={hoveredIndex === index ? item.imgHover : item.img}
                alt={item.title}
                className="w-[35px] text-[#F5DF77] "
              />
              <div className="md:pb-10">
                <h2 className="text-[14px] md:text-[16px] lg:text-[20px] py-3 font-mont-bold hover:text-[#F5DF77]">{item.title}</h2>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] font-mont-regular">{item.dc}</p>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] font-mont-regular">{item.dc2}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StageFour;
