import imgBlog from "../../assets/Image-blog.png";
import imgEcom from "../../assets/Image-ecom.png";
import imgErpCrm from "../../assets/Image-erp-crm.png";
import imgMarketing from "../../assets/Image-marketing.png";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RippleButton from "../RippleButton";
const a = [
  {
    id: 1,
    img: imgBlog,
    title: "Thiết Kế Website",
    description:
      "Chúng tôi tạo ra các trang web hiện đại, dễ sử dụng và thân thiện với người dùng. Từ ý tưởng ban đầu đến sản phẩm hoàn thiện, chúng tôi đảm bảo trang web của bạn không chỉ đẹp mắt mà còn hoạt động hiệu quả.",
    dl: 0.5,
  },
  {
    id: 2,
    img: imgEcom,
    title: "Lập Trình Web Ecommerce ",
    description:
      "Chúng tôi cung cấp các giải pháp thương mại điện tử toàn diện, giúp bạn xây dựng và quản lý cửa hàng trực tuyến chuyên nghiệp. Tích hợp các tính năng thanh toán an toàn và quản lý đơn hàng thông minh.",
    dl: 1,
  },
  {
    id: 3,
    img: imgErpCrm,
    title: "Chuyển Đổi Số Doanh Nghiệp (ERP, CRM)",
    description:
      "Chúng tôi hỗ trợ doanh nghiệp của bạn chuyển đổi số thành công với các hệ thống ERP và CRM tiên tiến, giúp tối ưu hóa quy trình quản lý và nâng cao hiệu quả hoạt động.",
    dl: 1.5,
  },
  {
    id: 4,
    img: imgMarketing,
    title: "Digital Marketing",
    description:
      "Chúng tôi cung cấp các chiến dịch digital marketing, từ quảng cáo trực tuyến đến tối ưu hóa công cụ tìm kiếm (SEO), giúp bạn tiếp cận và tương tác với khách hàng mục tiêu một cách hiệu quả.",
    dl: 2,
  },
];

const SectionFour = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(50px)",
      }}
      className=""
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[14px] font-mont-bold py-5 md:text-[20px] lg:text-[26px]"
      >
        Dịch Vụ
      </motion.div>
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 md:gap-x-6 ">
        {a?.map((data) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: data.dl }}
              key={data.id}
              className="background-gradient-r flex flex-col justify-center py-10 md:py-20 "
            >
              <div className=" flex justify-center">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[345px] lg:h-[345px]"
                />
              </div>
              <div className="px-10 md:px-14 lg:px-20 space-y-3">
                <h2 className="text-[14px] md:text-[20px] lg:text-[24px] font-mont-bold">
                  {data.title}
                </h2>
                <p className="text-[12px] md:text-[12px] lg:text-[14px] font-mont-regular">
                  {data.description}
                </p>
                <RippleButton className="px-3 md:px-4 lg:px-6 py-2 md:py-3 bg-white text-black text-[12px] md:text-[12px] lg:text-[14px] font-mont-bold">
                  Xem Thêm
                </RippleButton>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionFour;
