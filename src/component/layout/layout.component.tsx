import React from "react";
import PropTypes from "prop-types";

import LanguageComponent from "../language/language.component";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <LanguageComponent />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
