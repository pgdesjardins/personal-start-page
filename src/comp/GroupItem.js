import React from "react";

const GroupItem = ({ url, title, desc = undefined, icon = undefined }) => {
  return (
    <li class="list-group-item">
      {icon && (
        <img
          width="16"
          height="16"
          src={icon}
          alt={title}
          style={{ marginRight: ".3em" }}
        />
      )}
      <a href={url}>{title}</a>
      {desc && (
        <small
          class="text-muted font-weight-light"
          style={{ marginLeft: ".5em" }}
        >
          {desc}
        </small>
      )}
    </li>
  );
};

export default GroupItem;
