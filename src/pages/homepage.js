import React from "react";
import Content from "../components/content";
import Footer from "../components/footer";
import SideBar from "../components/sidebar";

// import Footer from "./../components/Footer";

const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <SideBar />
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;
