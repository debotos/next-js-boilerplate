/* eslint react/prop-types: 0 */
import React from "react";
import Header from "./Header";
import stylesheet from "styles/main.scss";

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Header />
    {props.children}
  </div>
);
export default Layout;
