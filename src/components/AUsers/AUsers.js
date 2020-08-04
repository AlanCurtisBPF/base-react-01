import React, { useEffect } from "react";
import { connect } from "react-redux";
import { startGetUsers } from "../../redux/users/usersActions";

const AUsers = (props) => {
  useEffect(() => {
    props.startGetUsers();
  }, []);

  const renderListOfUsers = () => {
    return props.users.data.map((user, i) => (
      <div key={i}>
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
    ));
  };

  const renderLoading = () => {
    return <div>...Loading Users</div>;
  };

  const renderError = () => {
    return <div>{props.users.error}</div>;
  };

  return (
    <div className="AUsers">
      AUsers
      {props.users.isPending
        ? renderLoading()
        : props.users.error
        ? renderError()
        : renderListOfUsers()}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startGetUsers: () => dispatch(startGetUsers()),
  dispatch,
});

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AUsers);
