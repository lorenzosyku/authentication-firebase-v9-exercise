import "./App.css";
import { signUp, useAuth, logout, login, signInWithEmailAndPassword, auth } from "./firebase";
import { useRef, useState } from "react";

function App() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert("error");
    }

    setLoading(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logout();
    } catch (error) {
      alert("error");
    }
    setLoading(false);
  };

  return (
    <div className="">
      <div className="">
        <h1>current user:{currentUser?.email}</h1>
      </div>
      <div className="">
        <input ref={emailRef} placeholder="email" />
        <input ref={passwordRef} type="passwordrun" placeholder="password" />
        <button disabled={loading || currentUser} onClick={handleSubmit}>
          signup
        </button>
        <button disabled={loading || currentUser} onClick={handleLogin}>
          login
        </button>
        <button disabled={loading || !currentUser} onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
}

export default App;
