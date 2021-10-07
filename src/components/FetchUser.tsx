import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/userAction";

type Props = {
  userData: any;
  fetchUser: any;
};

const FetchUser: React.FC<Props> = ({ userData, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return userData.loading ? (
    <div>Loading</div>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user: any) => <p>{user.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchUser);
