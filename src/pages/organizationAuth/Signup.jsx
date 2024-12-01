import React, { useState } from "react";
import Apple from "../../assets/auth/apple.png";
import Google from "../../assets/auth/google.png";
import Outlook from "../../assets/auth/outlook.png";
import MainHeading from "../../components/common/MainHeading";
import InputField from "../../components/common/InputField";
import ButtonFilled from "../../components/common/ButtonFilled";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    Navigate("/organization-auth/organization-details")
  };

  return (
    <div className=" w-full h-full  py-20 mt-24 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border  w-[32rem] gap-9 rounded-md border-gray-200 p-11 flex flex-col items-center justify-center"
      >
        <MainHeading text="Sign up" />
        <div className="flex gap-4">
          <div className="border w-20 h-12 cursor-pointer  flex items-center justify-center rounded-md  border-gray-200">
            <img className="w-6" src={Google} alt="google image" />
          </div>
          <div className="border w-20 h-12 cursor-pointer flex items-center justify-center rounded-md  border-gray-200">
            <img className="w-7" src={Outlook} alt="outlook image" />
          </div>
          <div className="border w-20 h-12 cursor-pointer flex items-center justify-center rounded-md  border-gray-200">
            <img className="w-6" src={Apple} alt="apple image" />
          </div>
        </div>
        <InputField
          typeText="text"
          placeholderText="Username or email address"
          extraText=""
          inputLabel="Enter your  email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="flex gap-5 flex-col md:flex-row">
          <InputField
            typeText="text"
            placeholderText="First name"
            extraText=""
            inputLabel="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <InputField
            typeText="text"
            placeholderText="Last name"
            extraText=""
            inputLabel="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <InputField
          typeText="password"
          placeholderText="Password"
          extraText="sign up"
          inputLabel="Enter your Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <ButtonFilled text="Register" type="submit" />

        <div className="flex w-full gap-2 items-center justify-center">
          <p className="text-light ">Have an Account ?</p>
          <Link
            to="/organization-auth/login"
            className="text-[#0080FF]  hover:underline  text-end"
          >
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
