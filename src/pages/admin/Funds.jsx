import React from "react";
import MainHeading from "../../components/common/MainHeading";
import SubHeading from "../../components/common/SubHeading";
import ButtonFilled from "../../components/common/ButtonFilled";

const Funds = () => {
  return (
    <div className="md:p-5 font-gilroy min-h-screen ">
      <div className="flex flex-col items-center py rounded-xl shadow-2xl shadow-[#d6d5d5]  justify-center gap-5 h-[80vh]">
        <MainHeading text="No Employee Found" />
        <SubHeading text="This list is currently empty. If you don't see the employee you're looking for, click the 'Invite Employee' button to invite them." />
        <div>
          <ButtonFilled text="Invite Employee" />
        </div>
      </div>
    </div>
  );
};

export default Funds;
