import React from "react";
import GroupName from "./GroupName";
import GroupItem from "./GroupItem";

const Group = ({ name, links }) => {
  return (
    <div className="col">
      <ul>
        <GroupName name={name} />

        {links.map((link) => (
          <GroupItem {...link} key={link.url} />
        ))}
      </ul>
    </div>
  );
};

export default Group;
