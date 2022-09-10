import React from "react";
import {NavLink, Route} from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  };

  return (
    <div>
      <h3>목록:</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/tpleehan">tpleehan</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/react">react</NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>목록을 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
