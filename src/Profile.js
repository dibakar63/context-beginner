import { LoginContext } from "./Context/LoginContext";
import { useContext } from "react";
const Profile = () => {
  const { username } = useContext(LoginContext);
  return (
    <>
      <h1>Profile</h1>
      <h3>{username}</h3>
    </>
  );
};
export default Profile;
