import React from "react";
import IdCard from "./IdCard";
import CardContent from "./CardContent";

const Header = () => {
  return (
    <div className="header">
      <CardContent />
      <IdCard />
    </div>
  );
};

export default Header;
