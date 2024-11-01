import iconFb from "../../assets/Image-fb.png";
import iconMail from "../../assets/Image-mail.png";
import iconIns from "../../assets/Image-ins.png";

const Footer = () => {
  return (
    <>
      <div className="mt-20 py-0 md:py-10 lg:py-20 ">
        <div className="mt-20 py-12 px-20">
          <div className="element-f "></div>
        </div>
        <div className="flex items-center justify-center space-x-10">
          <a
            href="https://www.facebook.com/profile.php?id=61564832794531"
            target="_blank"
            rel="Golden Cloud Solutions"
          >
            <img src={iconFb} alt="icon-fb" className="w-[32px]" />
          </a>
          <a
            href="mailto:contact@goldencloudsolutions.online"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconMail} alt="icon-mail" className="w-[32px]" />
          </a>
          <a
            href="https://www.instagram.com/gctechnology2705/"
            target="_blank"
            rel="Golden Cloud Solutions"
          >
            <img src={iconIns} alt="icon-ins" className="w-[32px]" />
          </a>
        </div>
        <p className="py-10 text-center text-[12px] md:text-[16px] ">
          GOLDEN CLOUD SOLUTION © 2024 All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
