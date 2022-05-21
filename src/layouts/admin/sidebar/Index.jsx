import React, { useContext } from "react";
import { AdminContext } from "../../../context/adminLayoutContext";
import Avatar from "./Avatar";
import SidebarGroupTitle from "./SidebarGroupTitle";
import SidebarItem from "./SidebarItem";

const Index = () => {
  const { showSidebar } = useContext(AdminContext);

  return (
    <section id="sidebar_section">
      <div
        className={`mini_sidebar collapsedd bg-dark h-100 ${
          showSidebar ? "expanded" : null
        }`}
      >
        <div className="p-0 m-0">
          <Avatar img="/assets/images/avatar/user2.jpg" name="قاسم بساکی" />

          <SidebarItem icon="fas fa-tachometer-alt" text="داشبورد" />
          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title="فروشگاه" />

          <SidebarItem icon="fas fa-stream" text="مدیریت گروه محصول" />
          <SidebarItem icon="fas fa-cube" text="مدیریت محصول" />
          <SidebarItem icon="fas fa-copyright" text="مدیریت برند ها" />
          <SidebarItem icon="fab fa-pagelines" text="مدیریت گارانتی ها" />
          <SidebarItem icon="fas fa-palette" text="مدیریت رنگ ها" />
          <SidebarItem icon="fas fa-percentage" text="مدیریت تخفیف ها" />
          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title="سفارشات و سبد خرید" />

          <SidebarItem icon="fas fa-shopping-basket" text="مدیریت سبد ها" />
          <SidebarItem
            icon="fas fa-luggage-cart"
            text="مدیریت سبد همدیریت سفارشات"
          />
          <SidebarItem icon="fas fa-truck-loading" text="مدیریت نحوه ارسال" />
          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title="کاربران و همکاران" />

          <SidebarItem icon="fas fa-users" text="مشاهده کاربران" />
          <SidebarItem icon="fas fa-user-tag" text="نقش ها" />
          <SidebarItem icon="fas fa-shield-alt" text="مجوز ها" />
          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title="ارتباطات" />

          <SidebarItem icon="fas fa-question-circle" text="سوال ها" />
          <SidebarItem icon="fas fa-comment" text="نظرات" />

          {/* <!-- <li className="py-2 btn-group dropstart pe-4">
                    <i className="ms-3 icon fas fa-check text-light"></i>
                    <span className="hiddenable" data-bs-toggle="dropdown" aria-expanded="false">داشبورد</span>
                    
                    <ul className="dropdown-menu px-2 sidebar_submenu_list">
                      <li className="d-none">اول</li>
                      <li>اول</li>
                      <li>دوم</li>
                      <li>سوم</li>
                    </ul>
                </li> --> */}
        </div>
      </div>
    </section>
  );
};

export default Index;
