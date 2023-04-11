import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import Image from "next/image";
import line from "../public/form/Line.svg";
import google from '../public/form/Google.svg'
import facebook from '../public/form/Facebook.svg'

const Form = ({ handleRegOrLog, text }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex  font-poppins h-screen bg-gradient-to-r from-[rgba(146,179,176,1)] via-[ rgba(62,149,171,1)] to-[rgba(38,110,154,1)]  justify-center items-center flex-col gap-6">
      <h1 className="text-6xl font-bold tracking-widest">WELCOME</h1>

      <form
        className="flex gap-8 flex-col text-white "
        onSubmit={handleSubmit(handleRegOrLog)}
      >
        <input
          placeholder="email"
          className="rounded-3xl  w-80 h-16 placeholder:text-white placeholder:text-center bg-[#D9D9D933]"
          {...register("email", {
            required: true,
          })}
          type="email"
        />

        <input
          className="rounded-3xl  placeholder:text-white placeholder:text-center  w-80 h-16 bg-[#D9D9D933]"
          placeholder="password"
          {...register("password", {
            required: true,
            minLength: 6,
          })}
          type="password"
        />
        <Button
          className="w-32  ml-24 h-12 rounded-3xl "
          variant="contained"
          type="submit"
        >
          {text}
        </Button>

      </form>
      <div className="flex gap-3 ">
        <p>{text === "login" ? "Don’t have account?" : "Have account"}</p>
        <Link
          className="text-yellow-300"
          href={text === "login" ? "/register" : "/login"}
        >
          {text === "login" ? "Register" : "Login"}
        </Link>
      </div>

      <div className="flex gap-4">
        <Image alt="line" src={line} />
        <p>OR LOGIN WITH</p>
        <Image alt="line" src={line} /> 
      </div>

      <div className="flex gap-4">
      <Image alt="google sinIn" src={google} />
      <Image alt="facebook sinIn" src={facebook} />
      </div>
    </div>
  );
};

export default Form;
