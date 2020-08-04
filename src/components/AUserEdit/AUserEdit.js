import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../redux/user/userActions";

const AUserEdit = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const handleUpdate = (e) => {
    let key = e.target.dataset.key;
    let value;
    if (key === "name") {
      value = inputName;
    } else if (key === "email") {
      value = inputEmail;
    }
    props.updateUser(key, value);
    setInputName("");
    setInputEmail("");
  };

  const handleOnChange = (e) => {
    const key = e.target.dataset.key;
    const value = e.target.value;
    if (key === "name") {
      setInputName(value);
    } else if (key === "email") {
      setInputEmail(value);
    }
  };

  return (
    <div className="AUserEdit">
      AUserEdit
      <div className="name">{props.user.name}</div>
      <input
        type="text"
        value={inputName}
        data-key={"name"}
        onChange={handleOnChange}
      />
      <button data-key={"name"} onClick={handleUpdate}>
        Update Name
      </button>
      <div className="email">{props.user.email}</div>
      <input
        type="text"
        data-key={"email"}
        value={inputEmail}
        onChange={handleOnChange}
      />
      <button data-key={"email"} onClick={handleUpdate}>
        Update Name
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (key, value) => dispatch(updateUser(key, value)),
  dispatch,
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AUserEdit);
