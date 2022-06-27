import React from "react";

const GroupItem = ({
  url,
  title,
  desc = undefined,
  icon = undefined,
  isObsolte = false
}) => {
  const style = isObsolte
    ? {
        textDecoration: "line-through"
      }
    : {};
  return (
    <li className="list-group-item">
      {icon && (
        <img
          width="16"
          height="16"
          src={icon}
          alt={title}
          style={{ marginRight: ".3em" }}
        />
      )}
      <a href={url} style={style}>
        {title}
      </a>
      {desc && (
        <small
          className="text-muted font-weight-light"
          style={{ marginLeft: ".5em" }}
        >
          {desc}
        </small>
      )}
    </li>
  );
};

export default GroupItem;
