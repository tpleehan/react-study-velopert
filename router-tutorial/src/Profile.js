import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
  tpleehan: {
    name: '이한',
    description: '리액트 공부 중'
  },
  react: {
    name: '리액트',
    description: '리액트 v18 사용 중'
  }
};

const Profile = ({match}) => {
  const {username} = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않습니다.</div>
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;