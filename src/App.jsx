import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
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

const App = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto" >
      <Routes>
        {/* Define the parent layout */}
        <Route path="/organization-auth" element={<OrganizationAuthLayout />}>
          {/* Nested Routes */}
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
          <Route path="organization-invites" element={<OrganizationInvites />} />
        </Route>
      </Routes>

      {/* <Fund/> */}
      <Earn/>
      <Footer />
    </div>
  );
};

export default App;
