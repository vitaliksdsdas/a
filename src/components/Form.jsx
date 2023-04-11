import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
const Form = ({ handleClick, title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>{title}</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <input onChange={(e) => setPassword(e.target.value)} type="password" />
      <button onClick={() => handleClick(email, password)}>push</button>

    </div>
  );
};

//   const { register, handleSubmit } = useForm("");
//   const handleForm = (data) => {
//     alert(JSON.stringify(data));
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(handleForm)}>
//         <input
//           style={{ marginRight: 10 }}
//           {...register("email", {
//             required: "error",
//           })}
//           type="email"
//         />
//         <input
//           style={{ marginRight: 10 }}
//           {...register("password", {
//             minLength: 6,
//           })}
//           type="password"
//         />
//         <input onClick={() => handleLogin()} type="submit" value="push" />
//       </form>
//     </div>
//   );
// };

export default Form;
