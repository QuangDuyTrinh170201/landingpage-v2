import { Helmet } from "react-helmet";
import SectionFour from "../components/Home/SectionFour";
import SectionOne from "../components/Home/SectionOne";
import SectionThree from "../components/Home/SectionThree";
import SectionTwo from "../components/Home/SectionTwo";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* <!-- Meta Information --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Golden Cloud Solutions cung cấp các giải pháp phần mềm tùy chỉnh, từ phát triển trang web, hệ thống CRM, ERP đến dịch vụ marketing, giúp doanh nghiệp tối ưu hóa quản lý."
        />
        <meta
          name="keywords"
          content="Golden Cloud Solution, Golden Cloud, tùy chỉnh trang web, phát triển CRM, hệ thống ERP, giải pháp phần mềm doanh nghiệp, tích hợp MRP, phần mềm quản lý, dịch vụ marketing, tối ưu quản lý doanh nghiệp, phát triển web, CRM tùy chỉnh, ERP tùy chỉnh, giải pháp công nghệ, tăng trưởng doanh nghiệp"
        />
        <meta name="robots" content="index, follow" />
     

        <meta
          property="og:title"
          content="Golden Cloud Solutions - Giải pháp phần mềm toàn diện cho doanh nghiệp"
        />
        <meta
          property="og:description"
          content="Golden Cloud Solutions cung cấp các giải pháp phần mềm tùy chỉnh, từ phát triển trang web, hệ thống CRM, ERP đến dịch vụ marketing, giúp doanh nghiệp tối ưu hóa quản lý và tăng trưởng hiệu quả hoạt động."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/fir-e4ab2.appspot.com/o/logo-522.png?alt=media&token=f91b6664-8da3-43cd-a638-bf0853c54bdb"
        />
        <meta property="og:url" content="https://www.goldencloudsolution.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Golden Cloud Solutions - Giải pháp phần mềm toàn diện cho doanh nghiệp"
        />
        <meta
          name="twitter:description"
          content="Golden Cloud Solutions cung cấp các giải pháp phần mềm tùy chỉnh, từ phát triển trang web, hệ thống CRM, ERP đến dịch vụ marketing, giúp doanh nghiệp tối ưu hóa quản lý và tăng trưởng hiệu quả hoạt động."
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/fir-e4ab2.appspot.com/o/logo-522.png?alt=media&token=f91b6664-8da3-43cd-a638-bf0853c54bdb"
        />

        {/* <!-- Title --> */}
        <title>Golden Cloud Solutions - Giải pháp phần mềm toàn diện cho doanh nghiệp</title>
      </Helmet>
      <div className="w-full py-10 px-5 md:px-10 lg:px-20 max-md:py-6 z-50 space-y-20  lg:space-y-40">
        <div>
          <SectionOne />
        </div>
        <div>
          <SectionTwo />
        </div>
        <div>
          <SectionThree />
        </div>
        <div>
          <SectionFour />
        </div>
      </div>
    </>
  );
};

export default Home;
