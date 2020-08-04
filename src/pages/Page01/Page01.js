import React, { useEffect, useState } from "react";
import axios from "axios";
import AUser from "../../components/AUser/AUser";
import AUserEdit from "../../components/AUserEdit/AUserEdit";
import AUsers from "../../components/AUsers/AUsers";

const Page01 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/graphql?query={customers{name,age}}`)
      .then((res) => {
        console.log("back", res.data.data.customers);
        setUsers(res.data.data.customers);
      });
  }, []);

  return (
    <div className="Page01">
      Page01
      <div>
        {users ? users.map((user, i) => <div key={i}>{user.name}</div>) : null}
        <AUser />
        <AUserEdit />
        <AUsers />
      </div>
    </div>
  );
};

export default Page01;
