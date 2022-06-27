import React from "react";

const GroupName = ({ name }) => {
  return (
    <li className="list-group-item">
      <h2>{name}</h2>
    </li>
  );
};

export default GroupName;
