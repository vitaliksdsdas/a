import { useSelector } from "react-redux";

const useAuth = () => {
  const { email, id, token } = useSelector((state) => state.user);
  return {
    isAuth: !!email,
    email,
    id,
    token,
  };
};

export default useAuth;
