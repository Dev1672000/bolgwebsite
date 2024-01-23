// App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LocalNewsDetailed from "./LocalNewsDetailed";
import LocalNews from "./LocalNews";

const index = () => {
  return (
    <>
      <LocalNews />
      {/* <LocalNewsDetailed /> */}
    </> 
  );
};

export default index;
