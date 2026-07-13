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

    } catch (error) {
        alert(error.response?.data?.message || "Registration failed");
    }
};

    <form onSubmit={handleRegister}>
        <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Register
      </button>
    </form>

   
    return (
        <h1>Register Page</h1>
       
        
    );
}


export default Register;