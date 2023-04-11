import Form from "./form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";
import { useRouter } from "next/router";

const SingUp = () => {
  const auth = getAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const createUser = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
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
  return (
    <div>
      <Form
        handleRegOrLog={createUser}
        // loginUserWithGoogle={createUserWithGoogle}
        text="register"
      />
    </div>
  );
};

export default SingUp;
