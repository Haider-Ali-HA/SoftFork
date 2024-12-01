import React from "react";
import { Route, Router } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar2 from "./components/common/Navbar2";

const App = () => {
  return (
    <>
    <Navbar2 />
      {/* <Router><Route path="/" component={Home} /></Router> */}
      <Footer />
    </>
  );
};

export default App;
