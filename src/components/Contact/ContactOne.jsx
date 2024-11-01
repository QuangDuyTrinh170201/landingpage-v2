import React from "react";
import iconPhone from "../../assets/icon-phone.png";
import iconWeb from "../../assets/icon-web.png";
import iconMail from "../../assets/icon-mail.png";
import iconAdd from "../../assets/icon_add.png";
import imgContact from "../../assets/contact-icon.png"

import imgFb from "../../assets/Image-fb.png";
import imgIns from "../../assets/Image-ins.png";

const ContactOne = () => {
  return (
    <div className="w-full py-10 px-5 md:px-10 lg:px-20 space-y-5 md:space-y-10  max-md:py-6">
      <h1 className="text-[16px] md:text-[20px] lg:text-[26px] font-mont-bold">Liên Hệ Chúng Tôi </h1>
      <div className="relative">
        <div className="background-gradient-c flex flex-col justify-center px-2 md:px-10 py-5 md:py-10 w-full md:w-[80%]">
          <div className="space-y-3">
            <h2 className="text-[12px] md:text-[14px] lg:text-[24px] font-mont-bold">Thông Tin Liên Hệ</h2>
            <div className="flex flex-col space-y-2">
              <div className="text-[12px] md:text-[14px] lg:text-[20px] font-mont-regular flex items-center space-x-3">
                <img src={iconPhone} alt="icon Phone" className="w-[15px] md:w-[24px] lg:w-[30px]" />
                <a href="tel:0876827051" className="hover:underline">
                  SDT: 0876827051
                </a>
              </div>
              <div className="text-[12px] md:text-[14px] lg:text-[20px] font-mont-regular flex items-center space-x-3">
                <img src={iconWeb} alt="icon Web" className="w-[15px] md:w-[24px] lg:w-[30px]" />
                <a
                  href="https://goldencloudsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Website: goldencloudsolutions.com
                </a>
              </div>
              <div className="text-[12px] md:text-[14px] lg:text-[20px] font-mont-regular flex items-center space-x-3">
                <img src={iconMail} alt="icon Mail" className="w-[15px] md:w-[24px] lg:w-[30px]" />
                <a
                  href="mailto:contact@goldencloudsolutions.com"
                  className="hover:underline"
                >
                  Gmail: contact@goldencloudsolutions.com
                </a>
              </div>
              <div className="text-[12px] md:text-[14px] lg:text-[20px] font-mont-regular flex items-center space-x-3">
                <img src={iconAdd} alt="icon Address" className="w-[15px] md:w-[24px] lg:w-[30px]" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=330%2F15+Phan+Đ%C3%ACnh+Ph%C3%B9ng%2C+ph%C6%B0%E1%BB%9Dng+1%2C+qu%E1%BA%ADn+Ph%C3%BA+Nhu%E1%BA%ADn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Địa chỉ: 330/15 Phan Đình Phùng, phường 1, quận Phú Nhuận.
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-5 right-0 z-0 md:top-0 lg:right-[5%]">
          <img src={imgContact} alt="Image Contact" className="w-[77px] md:w-[200px] lg:w-[300px]" />
        </div>
       
      </div>
      <div className="background-gradient-c flex flex-col justify-center px-2 md:px-10 py-5 md:py-10 w-full md:w-[80%]">
        <div className="space-y-3">
          <div className="text-[12px] md:text-[14px] lg:text-[24px] font-mont-bold flex items-center space-x-5">
            <h2>Mạng Xã Hội</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61564832794531"
                target="_blank"
                rel="Golden Cloud Solutions"
              >
                <img src={imgFb} alt="icon Fb" className="w-[22px] md:w-[30px] lg:w-[40px]" />
              </a>
              <a
                href="https://www.instagram.com/gctechnology2705/"
                target="_blank"
                rel="Golden Cloud Solutions"
              >
                <img src={imgIns} alt="icon Ins" className="w-[22px] md:w-[30px] lg:w-[40px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOne;
