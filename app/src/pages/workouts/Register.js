import FormGroup from "../../components/FormGroup";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const response = await fetch("http://127.0.0.1:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
  };

  return (
    <div className="container-center flex-col">
      <FormGroup
        input={"Username"}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FormGroup input={"Email"} onChange={(e) => setEmail(e.target.value)} />
      <FormGroup
        input={"Password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => submit()}
        className="bg-gray-700 rounded-xl px-4 py-2 text-white"
      >
        Submit
      </button>
    </div>
  );
};

export default Register;
