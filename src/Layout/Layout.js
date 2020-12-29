import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Container } from "semantic-ui-react";

function Layout({ children }) {
  return (
    <div>
      <Menu />
      <Container
        style={{ marginTop: "7em", marginBottom: "2em", minHeight: "500px" }}
      >
        {children}
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
