import React from "react";

const SidebarItem = ({icon,text}) => {
  return (
    <div className="py-1 text-start pe-4 sidebar_menu_item sidebar_item">
      <i className={`ms-3 icon ${icon} text-light`}></i>
      <span className="hiddenable no_wrap font_08">{text}</span>
    </div>
  );
};

export default SidebarItem;
