import React from "react";
import UserContainer from "../containers/UserContainer";
import UsersContainer from "../containers/UsersContainer";
import {Route, Routes} from "react-router-dom";

const UsersPage = () => {
  return (
    <>
      <UsersContainer />
      <Routes>
        <Route
          path="/users/:id"
          render={({ match }) => <UserContainer id={match.params.id} />}
        />
      </Routes>
    </>
  );
};

export default UsersPage;