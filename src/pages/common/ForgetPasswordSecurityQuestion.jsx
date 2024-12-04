import React, { useState } from "react";
import InputField from "../../components/common/InputField";
import ButtonFilled from "../../components/common/ButtonFilled";
import SecondHeading from "../../components/common/SecondHeading";
import { useNavigate } from "react-router-dom";

const ForgetPasswordSecurityQuestion = () => {
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
    navigate("/reset-password/email"); // Navigates to the next step
  };

  return (
    <div className="w-full h-full py-20 mt-24 flex items-center justify-center lg:gap-[10%] px-4">
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

        <ButtonFilled text="Next" className="h-12 md:h-14 sm:text-xl" type="submit" />
      </form>
    </div>
  );
};

export default ForgetPasswordSecurityQuestion;
