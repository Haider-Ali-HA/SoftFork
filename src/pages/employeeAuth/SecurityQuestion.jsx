import React, { useState } from "react";
import InputField from "../../components/common/InputField";
import ButtonFilled from "../../components/common/ButtonFilled";
import SecondHeading from "../../components/common/SecondHeading";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const SecurityQuestion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstJobCity: "",
    favoriteTeacher: "",
    firstCar: "",
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
    console.log(formData); // Logs form data
    navigate("/employee-auth/additional-signup"); // Navigates to the next step
  };

  return (
    <div className="w-full h-full py-20 mt-24 flex items-center justify-center lg:gap-[10%] px-4">
      <Link
        to="/employee-auth/additional-signup"
        className="hidden sm:block p-2 shadow-[0px_8px_12px_#cfcfcf] rounded-full"
      >
        <BsArrowLeftShort className="text-3xl" />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="w-[45rem] gap-9 rounded-md border-gray-200 px-2 sm:p-11 flex flex-col items-center justify-center"
      >
        <div className="w-full flex">
          <SecondHeading text="Security Questions" />
        </div>

        <InputField
          typeText="text"
          inputLabel="What is the name of the city where your first job was located?"
          name="firstJobCity"
          value={formData.firstJobCity}
          onChange={handleChange}
        />
        <InputField
          typeText="text"
          inputLabel="What is the name of your favorite childhood teacher?"
          name="favoriteTeacher"
          value={formData.favoriteTeacher}
          onChange={handleChange}
        />
        <InputField
          typeText="text"
          inputLabel="What is the make and model of your first car?"
          name="firstCar"
          value={formData.firstCar}
          onChange={handleChange}
        />

        <ButtonFilled text="Next" type="submit" />
      </form>
      <Link
        to="/employee-auth/additional-signup"
        className="hidden sm:block p-2 shadow-[0px_8px_12px_#cfcfcf] rounded-full"
      >
        <BsArrowRightShort className="text-3xl" />
      </Link>
    </div>
  );
};

export default SecurityQuestion;
