import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../common/hooks";
import { selectAuth } from "../reducers/auth";

const Authen = () => {
  const authedUser = useAppSelector(selectAuth);
  if (!Object.keys(authedUser).length) {
    return <Navigate replace to="/login" />;
  }
  return <Outlet />;
};

export default Authen;
