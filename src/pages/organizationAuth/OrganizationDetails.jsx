import React, { useState } from "react";
import InputField from "../../components/common/InputField";
import ButtonFilled from "../../components/common/ButtonFilled";
import SecondHeading from "../../components/common/SecondHeading";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import UploadFilled from "../../components/common/UploadFilled";

const OrganizationDetails = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationSize: "",
    industry: "",
    location: "",
    website: "",
    taxId: "",
    businessEmail: "",
    logo: null, // To store the uploaded logo file
  });
  const [error, setError] = useState(""); // Error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogoUpload = (file) => {
    setFormData({
      ...formData,
      logo: file,
    });
    setError(""); // Clear error message if a file is uploaded
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.logo) {
      setError("Company logo is required.");
      return;
    }

    // Submit data and navigate if validation passes
    console.log(formData);
    Navigate("/organization-auth/admin-contact-details");
  };

  return (
    <div className="w-full h-full py-20 mt-24 flex items-center justify-center lg:gap-[10%] px-4">
      <Link
        to="/organization-auth/login"
        className="hidden sm:block p-2 shadow-[0px_8px_12px_#cfcfcf] rounded-full "
      >
        <BsArrowLeftShort className="text-3xl" />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="w-[45rem] gap-9 rounded-md border-gray-200 px-2 sm:p-11 flex flex-col items-center justify-center"
      >
        <div className="flex w-full ">
          <div>

          <SecondHeading text="Organization Details" />
          </div>
        </div>

        {/* Upload Component */}
        <UploadFilled
          text="Upload Company Logo"
          buttonText="Upload Logo"
          onFileSelect={handleLogoUpload}
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <InputField
          typeText="text"
          inputLabel="Organization Name"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
        />
        <InputField
          typeText="text"
          inputLabel="Organization Size"
          name="organizationSize"
          value={formData.organizationSize}
          onChange={handleChange}
        />
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <InputField
            typeText="text"
            inputLabel="Industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          />
          <InputField
            typeText="text"
            inputLabel="Country/Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <InputField
          typeText="text"
          inputLabel="Organization Website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <InputField
          typeText="text"
          inputLabel="Tax Identification Number"
          name="taxId"
          value={formData.taxId}
          onChange={handleChange}
        />
        <InputField
          typeText="text"
          inputLabel="Business Email"
          name="businessEmail"
          value={formData.businessEmail}
          onChange={handleChange}
        />

        <ButtonFilled text="Next" type="submit" />
      </form>
      <Link
        to="/organization-auth/admin-contact-details"
        className="hidden sm:block p-2 shadow-[0px_8px_12px_#cfcfcf] rounded-full "
      >
        <BsArrowRightShort className="text-3xl" />
      </Link>
    </div>
  );
};

export default OrganizationDetails;
