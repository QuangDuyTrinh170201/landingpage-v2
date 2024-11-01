import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_k58un9d", // Thay bằng service_id từ EmailJS
        "template_v3v9n3q", // Thay bằng template_id từ EmailJS
        formData,
        "U_Z3QuXmWOFqevFkl" // Thay bằng user_id từ EmailJS
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex items-center justify-center px-0 md:px-20 "
    >
      <div className="px-0 md:px-20">
        <div className="bg-white px-10 py-16 space-y-5 md:space-y-10">
          <div>
            <p className="text-black text-[10px] md:text-[14px] lg:text-[20px] font-mont-bold">
              Họ và tên
            </p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="h-[40px] md:h-[50px] w-full border-black border-2 rounded-md text-black text-[12px] md:text-[14px] lg:text-[20px] px-3"
            />
          </div>
          <div className="flex justify-between space-x-5">
            <div>
              <p className="text-black text-[10px] md:text-[14px] lg:text-[20px] font-mont-bold">
                Email
              </p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="h-[40px] md:h-[50px] w-[300px] md:w-[450px] border-black border-2 rounded-md text-black text-[12px] md:text-[14px] lg:text-[20px] px-3"
              />
            </div>
            <div className="hidden lg:block">
              <p className="text-black text-[10px] md:text-[14px] lg:text-[20px] font-mont-bold">
                Số điện thoại
              </p>
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="h-[40px] md:h-[50px] w-[300px] md:w-[450px] border-black border-2 rounded-md text-black text-[12px] md:text-[14px] lg:text-[20px] px-3"
              />
            </div>
          </div>
          <div className="block lg:hidden">
            <p className="text-black text-[10px] md:text-[14px] lg:text-[20px] font-mont-bold">
              Số điện thoại
            </p>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="h-[40px] md:h-[50px] w-[300px] md:w-[450px] border-black border-2 rounded-md text-black text-[12px] md:text-[14px] lg:text-[20px] px-3"
            />
          </div>
          <div>
            <p className="text-black text-[10px] md:text-[14px] lg:text-[20px] font-mont-bold">
              Nội dung:
            </p>
            <textarea
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="h-[150px] md:h-[350px] w-full border-black border-2 rounded-md text-black text-[12px] md:text-[14px] lg:text-[20px] py-3 px-3"
            />
          </div>
          <div className="w-full text-center">
            <button
              type="submit"
              className=" bg-black py-2 px-8 md:px-10 text-[10px] md:text-[12px] lg:text-[16px] font-mont-bold"
            >
              gửi
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
