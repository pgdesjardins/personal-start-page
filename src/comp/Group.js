import React from "react";
import GroupName from "./GroupName";
import GroupItem from "./GroupItem";

const Group = ({ name, links }) => {
  return (
    <div className="col">
      <GroupName name={name} />
      {links.map((link) => (
        <GroupItem {...link} key={link.url} />
      ))}
    </div>
  );
};

export default Group;
