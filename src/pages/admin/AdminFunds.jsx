import React from "react";
import MainHeading from "../../components/common/MainHeading";
import SubHeading from "../../components/common/SubHeading";
import ButtonFilled from "../../components/common/ButtonFilled";
import { Link } from "react-router-dom";

const AdminFunds = () => {
  return (
    <div className=" font-gilroy min-h-full bg-white ">
      <div className="flex flex-col items-center py rounded-xl  shadow-[0px_0px_20px_#e2e2e2]  justify-center gap-5 h-[80vh]">
        <MainHeading text="No Employee Found" />
        <SubHeading text="This list is currently empty. If you don't see the employee you're looking for, click the 'Invite Employee' button to invite them." />
        <Link to="/admin/funds-table">
          <ButtonFilled
            className=" h-12 md:h-14 sm:text-xl"
            text="Invite Employee"
          />
        </Link>
      </div>
    </div>
  );
};

export default AdminFunds;
