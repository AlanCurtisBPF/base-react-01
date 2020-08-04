import React from "react";
import { connect } from "react-redux";

const AUser = (props) => {
  return (
    <div className="AUser">
      AUser
      <div className="name">{props.user.name}</div>
      <div className="email">{props.user.email}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(AUser);
