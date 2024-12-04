import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";

// organization imports
import OrganizationAuthLayout from "./layout/OrganizationAuthLayout";
import Login from "./pages/organizationAuth/Login";
import Signup from "./pages/organizationAuth/Signup";
import OrganizationDetails from "./pages/organizationAuth/OrganizationDetails";
import AdminContactDetails from "./pages/organizationAuth/AdminContactDetails";
import FundingDetails from "./pages/organizationAuth/FundingDetails";
import TermsAndAgreements from "./pages/organizationAuth/TermsAndAgreements";
import ImportEmployees from "./pages/organizationAuth/ImportEmployees";
import OrganizationInvites from "./pages/organizationAuth/OrganizationInvites";
import Fund from "./pages/Fund/Fund";
import Earn from "./pages/Earn/Earn";
import Homepage from "./pages/Homepage/Homepage";
import DiscoverIdeas from "./pages/Fund/DiscoverIdeas";
import GigsAvailable from "./pages/Earn/GigsAvailable";
import Navbar3 from "./components/common/Navbar3";
import GigDetails from "./components/earn/GigDetails";
import WorkDeliver from "./components/earn/WorkDeliver";
import Build from "./pages/build/Build";

// employee imports
import EmployeeAuthLayout from "./layout/EmployeeAuthLayout";
import EmployeeLogin from "./pages/employeeAuth/EmployeeLogin";
import NecessaryEmployeeSignup from "./pages/employeeAuth/NecessaryEmployeeSignup";
import AdditionalEmployeeSignup from "./pages/employeeAuth/AdditionalEmployeeSignup";
import SecurityQuestion from "./pages/employeeAuth/SecurityQuestion";
import EmployeeTermsAndAgreements from "./pages/employeeAuth/EmployeeTermsAndAgreements";
import ForgetPasswordSecurityQuestion from "./pages/common/ForgetPasswordSecurityQuestion";
import ForgetPasswordEmail from "./pages/common/ForgetPasswordEmail";
import OTPVerification from "./pages/common/OTPVerification";
import CreateNewPassword from "./pages/common/CreateNewPassword";
import ResetPasswordLayout from "./layout/ResetPasswordLayout";

// admin imports
import AdminLayout from "./layout/adminLayout/AdminLayout";
import AdminFunds from "./pages/admin/AdminFunds";
import Dashboard from "./pages/admin/Dashboard";
import Employees from "./pages/admin/Employees";
import Projects from "./pages/admin/Projects";
import ViewAllReports from "./pages/admin/ViewAllReports";
import InviteEmployees from "./pages/admin/InviteEmployees";
import CreateProject from "./pages/admin/CreateProject";
import Chat from "./pages/admin/Chat";
import Settings from "./pages/admin/Settings";
import ShowAllProjects from "./pages/admin/ShowAllProjects";
import KeyMetrics from "./pages/build/KeyMetrics";
import ProposalsAndVoting from "./pages/build/ProposalsAndVoting";
import Spend from "./pages/spend/Spend";
import InviteEmployeeDataTable from "./pages/admin/InviteEmployeeDataTable";
import CreateSingleProject from "./pages/admin/CreateSingleProject";
import FundsTable from "./pages/admin/FundsTable";
import ViewSingleReport from "./pages/admin/ViewSingleReport";
import FinalTermsAndAgreements from "./pages/organizationAuth/FinalTermsAndAgreements";

const App = () => {
  return (
    <div className="w-full">
      <Routes>
        {/* Routes for Organization Login and Registration  start */}
        <Route path="/organization-auth" element={<OrganizationAuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="organization-details"
            element={<OrganizationDetails />}
          />
          <Route
            path="admin-contact-details"
            element={<AdminContactDetails />}
          />
          <Route path="funding-details" element={<FundingDetails />} />
          <Route path="terms&agreements" element={<TermsAndAgreements />} />
          <Route
            path="final-terms&agreements"
            element={<FinalTermsAndAgreements />}
          />
          <Route
            path="import-employees"
            element={<ImportEmployees address="importEmployee" />}
          />
          <Route
            path="organization-invites"
            element={<OrganizationInvites />}
          />
        </Route>
        {/* Routes for Organization Login and Registration  end */}

        {/* Routes for employee Login and Registration  start */}
        <Route path="/employee-auth" element={<EmployeeAuthLayout />}>
          <Route path="login" element={<EmployeeLogin />} />
          <Route
            path="necessary-signup"
            element={<NecessaryEmployeeSignup />}
          />
          <Route
            path="additional-signup"
            element={<AdditionalEmployeeSignup />}
          />
          <Route path="security-question" element={<SecurityQuestion />} />
          <Route
            path="terms&agreements"
            element={<EmployeeTermsAndAgreements />}
          />
        </Route>
        {/* Routes for employee Login and Registration  end */}
        {/* Routes for reset password  start */}
        <Route path="/reset-password" element={<ResetPasswordLayout />}>
          <Route
            path="security-question"
            element={<ForgetPasswordSecurityQuestion />}
          />
          <Route path="email" element={<ForgetPasswordEmail />} />
          <Route path="otp-verification" element={<OTPVerification />} />
          <Route path="create-new-password" element={<CreateNewPassword />} />
        </Route>
        {/* Routes for reset password  end */}
        {/* Routes for admin dashboards  start */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="funds" element={<AdminFunds />} />
          <Route path="employees" element={<Employees />} />
          <Route path="projects" element={<Projects />} />
          <Route path="view-reports" element={<ViewAllReports />} />
          <Route path="view-single-reports" element={<ViewSingleReport />} />
          <Route path="invite-employees" element={<InviteEmployees />} />
          <Route path="create-project" element={<CreateProject />} />
          <Route path="chat" element={<Chat />} />
          <Route path="settings" element={<Settings />} />
          <Route path="show-all-projects" element={<ShowAllProjects />} />
          <Route path="funds-table" element={<FundsTable />} />
          <Route
            path="invite-employees-table"
            element={<InviteEmployeeDataTable />}
          />
          <Route
            path="create-single-project"
            element={<CreateSingleProject />}
          />
        </Route>
        {/* Routes for admin dashboards  end */}

        <Route path="/" element={<Homepage />} />
        <Route path="/fund" element={<Fund />} />
        <Route path="/discover-ideas" element={<DiscoverIdeas />} />

        <Route path="/earn">
          <Route path="" element={<Earn />} />
          <Route path="gigs-available" element={<GigsAvailable />} />
          <Route path="gig-details" element={<GigDetails />} />
          <Route path="work-deliver" element={<WorkDeliver />} />
        </Route>

        <Route path="/build">
          <Route path="" element={<Build />} />
          <Route path="create-project" element={<CreateProject />} />
          <Route path="key-metrics" element={<KeyMetrics />} />
          <Route path="proposals-and-voting" element={<ProposalsAndVoting />} />
        </Route>

        <Route path="/spend" element={<Spend />} />
      </Routes>

      {/* <Navbar3/> */}

      {/* <Fund/> */}
      {/* <DiscoverIdeas/> */}

      {/* <Earn/> */}
      {/* <GigsAvailable/> */}
      {/* <GigDetails/> */}
      {/* <WorkDeliver/> */}

      {/* <Build/> */}

      {/* <Homepage /> */}
      <Footer />
    </div>
  );
};

export default App;
