import React, { useContext } from "react";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
import  {AdminContext} from "../../context/adminLayoutContext";
import AdminContextContainer from "../../context/adminLayoutContext";

const Index = () => {
  const { showSidebar } = useContext(AdminContext);

  return (
    <AdminContextContainer>
      <div>
        <Navbar />

        <Sidebar />
        <section
          id="content_section"
          className={`bg-light py-2 px-3 ${
            showSidebar ? "with_sidebar" : null
          }`}
        ></section>
      </div>
    </AdminContextContainer>
  );
};

export default Index;
