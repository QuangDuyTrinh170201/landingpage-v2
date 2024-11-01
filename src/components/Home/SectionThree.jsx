import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SectionThree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  return (
    <>
      {/* PC */}
      <div
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(50px)",
        }}
        className="hidden lg:flex  w-full items-center space-x-10"
      >
        <div className="w-[40%] h-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="background-gradient-l flex flex-col justify-center py-12 px-14 h-[250px]">
              <h2 className="text-[26px] font-mont-bold py-2">GIẢI PHÁP</h2>
              <p className="text-[16px] font-mont-regular">
                Golden Cloud Technology luôn cống hiến hết mình cho ra những sản
                phẩm với tiêu chí tốt và chi phí phải chăng.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="w-[60%] h-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="background-gradient-l flex flex-col justify-center py-10 px-14 h-[250px]">
              <h2 className="text-[26px] font-mont-bold py-2">QUÁ TRÌNH</h2>
              <div className="text-[16px] font-mont-regular">
                <p>Thu thập và đánh giá</p>
                <p>Phân tích và tối ưu hoá giải pháp</p>
                <p>Tham vấn và lên kế hoạch xây dựng giải pháp</p>
                <p>
                  Triển khai và thu thập thông tin - Bảo dưỡng và phát triển hậu
                  kỳ
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile */}
      <div
        ref={ref2}
        style={{
          opacity: isInView2 ? 1 : 0,
          transform: isInView2 ? "none" : "translateY(50px)",
        }}
        className="flex lg:hidden w-full flex-col items-center space-y-10"
      >
        <div className="w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="background-gradient-r flex flex-col justify-center py-5 px-3 sm:px-5">
              <h2 className="text-[14px] md:text-[22px] font-mont-bold py-2">
                GIẢI PHÁP
              </h2>
              <p className="text-[12px] md:text-[14px] font-mont-regular">
                Golden Cloud Solutions luôn cống hiến hết mình cho ra những sản
                phẩm với tiêu chí tốt và chi phí phải chăng.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="background-gradient-r flex flex-col justify-center py-5 px-3 sm:px-5">
              <h2 className="text-[14px] md:text-[22px] font-mont-bold py-2">
                QUÁ TRÌNH
              </h2>
              <div className="text-[12px] md:text-[14px] font-mont-regular">
                <p>Thu thập và đánh giá</p>
                <p>Phân tích và tối ưu hoá giải pháp</p>
                <p>Tham vấn và lên kế hoạch xây dựng giải pháp</p>
                <p>
                  Triển khai và thu thập thông tin - Bảo dưỡng và phát triển hậu
                  kỳ
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
