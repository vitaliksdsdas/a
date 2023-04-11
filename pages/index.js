import useAuth from "@/hook/use-auth";
import { Button } from "@mui/material";

import Link from "next/link";

export default function Home() {
  const { isAuth } = useAuth();
  return isAuth ? (
    <div className="font-concert">Home:</div>
  ) : (
    <div className=" flex font-concert justify-center items-center flex-col h-screen">
      <div>
        <h1>YOU ARE NOT AUTHORIZED</h1>
      </div>

      <div>
        <Button variant="contained">
          <Link href="/login">go to Login page</Link>
        </Button>
      </div>
    </div>
  );
}
