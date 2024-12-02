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

// employee imports
import EmployeeAuthLayout from "./layout/EmployeeAuthLayout";
import EmployeeLogin from "./pages/employeeAuth/EmployeeLogin";
import NecessaryEmployeeSignup from "./pages/employeeAuth/NecessaryEmployeeSignup";
import AdditionalEmployeeSignup from "./pages/employeeAuth/AdditionalEmployeeSignup";
import SecurityQuestion from "./pages/employeeAuth/SecurityQuestion";

const App = () => {
  return (
    <>
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
          <Route path="import-employees" element={<ImportEmployees />} />
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
        </Route>
        {/* Routes for employee Login and Registration  end */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
