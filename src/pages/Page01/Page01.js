import React from "react";
import AUser from "../../components/AUser/AUser";
import AUserEdit from "../../components/AUserEdit/AUserEdit";
import AUsers from "../../components/AUsers/AUsers";

const Page01 = () => {
  return (
    <div className="Page01">
      Page01
      <div>
        <AUser />
        <AUserEdit />
        <AUsers />
      </div>
    </div>
  );
};

export default Page01;
