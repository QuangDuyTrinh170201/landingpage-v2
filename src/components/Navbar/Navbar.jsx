import { Link, useLocation } from "react-router-dom";
import mainLogo from "../../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex justify-between items-center py-10 px-5 md:px-10 lg:px-20  max-md:py-6 z-50">
      <Link to={"/"}>
        <img
          src={mainLogo}
          className="w-[53px] md:w-[100px] xl:w-[122px]"
          alt="Golden Cloud Solution logo"
        />
      </Link>
      <nav aria-label="Main Navigation">
        <ul className="z-50 flex space-x-4 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px]  ">
          <li>
            <Link
              to={"/"}
              className={
                pathname === "/"
                  ? "element px-1 md:px-6"
                  : "px-1 md:px-6 hover:text-[#ffc107] z-50"
              }
            >
              Trang Chủ
            </Link>
          </li>
          <li>
            <Link
              to={"/service"}
              className={
                pathname === "/service"
                  ? "element px-1 md:px-6"
                  : "px-1 md:px-6 hover:text-[#ffc107] z-50"
              }
            >
              Dịch Vụ
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className={
                pathname === "/contact"
                  ? "element px-1 md:px-6"
                  : "px-1 md:px-6 hover:text-[#ffc107] z-50"
              }
            >
              Liên Hệ
            </Link>
          </li>
          <li>
            <p
              className={
                pathname === "/blog"
                  ? "element px-1 md:px-6"
                  : "px-1 md:px-6 hover:text-[#ffc107] z-50"
              }
            >
              Blog
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
