import "./App.css";
import { signUp } from "./firebase";
import { useRef, useState } from "react";

function App() {

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async () => {
    await signUp(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div className="">
      <div className="">
        <input ref={emailRef} placeholder="email" />
        <input ref={passwordRef} type="passwordrun" placeholder="password" />
        <button onClick={handleSubmit}>signup</button>
      </div>
    </div>
  );
}

export default App;
