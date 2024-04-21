import React from "react";

function Logo() {
  return (
    <div className="justify-self-start md:justify-self-center flex items-center">
      <a href="/">
        <img className="h-5" height="5rem" src="/dagaz.svg" alt="My Vedic" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
