import React, { useState } from "react";
import InputField from "../../components/common/InputField";
import ButtonFilled from "../../components/common/ButtonFilled";
import SecondHeading from "../../components/common/SecondHeading";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const FundingDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fundingAmount: "",
    paymentMethod: "",
    currency: "",
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
    navigate("/organization-auth/terms&agreements");
  };

  return (
    <div className="w-full h-full py-20 mt-24 flex items-center justify-center lg:gap-[10%] px-4">
      <Link
        to="/organization-auth/admin-contact-details"
        className="hidden sm:block p-2 shadow-[0px_8px_12px_#cfcfcf] rounded-full "
      >
        <BsArrowLeftShort className="text-3xl" />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="w-[45rem] gap-9 rounded-md border-gray-200 px-2 sm:p-11 flex flex-col items-center justify-center"
      >
        <div className="w-full flex ">
          <div>
            <SecondHeading text="Funding Details" />
          </div>
        </div>

        <InputField
          typeText="text"
          inputLabel="Initial Funding Amount Per Employee"
          name="fundingAmount"
          value={formData.fundingAmount}
          onChange={handleChange}
        />

        <InputField
          typeText="text"
          inputLabel="Payment Method"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        />

        <InputField
          typeText="text"
          inputLabel="Currency"
          name="currency"
          value={formData.currency}
          onChange={handleChange}
        />

        <ButtonFilled text="Next" type="submit" />
      </form>
      <Link
        to="/organization-auth/terms&agreements"
        className="hidden sm:block  p-2 shadow-[0px_8px_12px_#cfcfcf] rounded-full "
      >
        <BsArrowRightShort className="text-3xl" />
      </Link>
    </div>
  );
};

export default FundingDetails;
