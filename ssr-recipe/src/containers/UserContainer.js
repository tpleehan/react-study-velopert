import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import User from "../components/User";
import {Preloader} from "../lib/PreloadContext";
import {getUser} from "../modules/users";

const UserContainer = ({ id }) => {
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return; // user가 이미 유효하다면 요청하지 않음
    dispatch(getUser(id));
  }, [dispatch, id, user]); // id가 바뀔 때 새로 요청해야 함

  // 컨테이너 유효성 검사 후 return null을 해야 하는 경우에 null 대신 Preloader를 반환
  if (!user) {
    return <Preloader resolve={() => dispatch(getUser(id))} />;
  }
  return <User user={user} />;
};

export default UserContainer;