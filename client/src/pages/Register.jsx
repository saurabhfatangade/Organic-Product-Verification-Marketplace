import { useState } from "react";
import api from "../services/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      alert(response.data.message);

      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration failed"
      );
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Register</h1>

      <form onSubmit={handleRegister}>

        <div>
          <label>Name</label>
          <br />

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;