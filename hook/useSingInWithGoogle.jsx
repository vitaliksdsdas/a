import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "@/firebase";
import { setUser } from "@/store/userSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const useSingInWithGoogle = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = getAuth();
  auth.languageCode = "it";

  const createUserWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      dispatch(
        setUser({
          email: result.user.email,
          id: result.user.uid,
          token: result.user.accessToken,
        })
      );
      router.push("/");
    });
  };
  return {
    createUserWithGoogle: createUserWithGoogle,
  };
};

export default useSingInWithGoogle;
