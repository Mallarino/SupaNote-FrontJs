import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/authService";
import { register } from "../services/authService";

//Hook para manejar Login y Register
export function useAuth() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const cleanForm = (username) => {
    setEmail("");
    setPassword("");
    if (username) setUsername("");
  };

  const SubmitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login({ email, password });
      toast.success("Successful login");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      cleanForm(false);
    }
  };

  const SubmitRegister = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await register({ email, username, password });
      toast.success("Account created");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      cleanForm(true);
      setLoading(false);
    }

  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    loading,
    setLoading,
    SubmitLogin,
    SubmitRegister
  };
}

