import React, { useState } from "react";
import SecondHeading from "../../components/common/SecondHeading";
import ButtonFilled from "../../components/common/ButtonFilled";
import { useNavigate } from "react-router-dom";
import Model from "../../components/common/Model";

const EmployeeTermsAndAgreements = () => {
  const [isTermsChecked, setIsTermsChecked] = useState(false); // State for terms checkbox
  const [isNotificationsChecked, setIsNotificationsChecked] = useState(false); // State for notifications checkbox
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const navigate = useNavigate();

  // Handle "Create Account" button click
  const handleCreateAccount = () => {
    if (isTermsChecked && isNotificationsChecked) {
      setIsModalOpen(true); // Open modal if both checkboxes are checked
    } else {
      alert("Please agree to all terms and conditions before proceeding.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // navigate("/organization-auth/import-employees"); // Navigate after closing modal
  };

  return (
    <div className="w-full h-full py-20 mt-24 flex items-center justify-center flex-col px-7 md:px-20 xl:px-72 gap-10">
      <SecondHeading text="Terms and Agreements" />
      <p className="text-secondary text-lg">
        What is Lorem Ipsum?
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className="text-secondary text-lg">
        Why do we use it?
        <br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <p className="text-secondary text-lg">
        Where does it come from?
        <br />
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
        <br />
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from "de
        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
        original form, accompanied by English versions from the 1914 translation
        by H. Rackham.
      </p>
      <div className="w-full">
        <div className="flex gap-3 w-full items-center mb-4">
          <input
            className="h-5 w-5"
            type="checkbox"
            checked={isTermsChecked}
            onChange={() => setIsTermsChecked(!isTermsChecked)}
          />
          <p
            className="text-light text-lg cursor-pointer"
            onClick={() => setIsTermsChecked(!isTermsChecked)}
          >
            Agree to all terms and conditions
          </p>
        </div>
        <div className="flex gap-3 w-full items-center">
          <input
            className="h-5 w-5"
            type="checkbox"
            checked={isNotificationsChecked}
            onChange={() => setIsNotificationsChecked(!isNotificationsChecked)}
          />
          <p
            className="text-light text-lg cursor-pointer"
            onClick={() => setIsNotificationsChecked(!isNotificationsChecked)}
          >
            Agree to receive email or platform notifications
          </p>
        </div>
      </div>
      <div className="w-full md:w-2/4">
        <ButtonFilled text="Create Account" className="h-12 md:h-14 sm:text-xl" onClick={handleCreateAccount} />
      </div>
      <Model
        open={isModalOpen}
        handleClose={handleCloseModal}
        title="Profile Setup"
        content="Your Profile Is Completed"
        buttonText="Okay"
      />
    </div>
  );
};

export default EmployeeTermsAndAgreements;
