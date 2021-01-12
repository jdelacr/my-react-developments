import React from "react";
import Menu from "../components/Navigation";
import Footer from "../components/Footer";
import { Container } from "semantic-ui-react";

function Layout({ children }) {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
