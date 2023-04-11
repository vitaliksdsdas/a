import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const useSingInWithGoogle = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = getAuth();
  const loginUser = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      router.push("/");
    });
  };
  return {
    loginUser: loginUser,
  };
};

export default useSingInWithGoogle;
