import { useState } from "react";
import "./style.css";

export default function App() {
  const [signup, setSignup] = useState(false);

  return (
    <div className="main">
      <div className="card">
        <h1>{signup ? "Create Account" : "Welcome Back"}</h1>

        <form>
          {signup && <input type="text" placeholder="Full Name" required />}

          <input type="email" placeholder="Email" required />

          <input
            type="password"
            placeholder="Password"
            minLength="6"
            required
          />

          <button>{signup ? "Sign Up" : "Login"}</button>
        </form

    
  
          <p onClick={() => setSignup(!signup)}>
          {signup
            ? "Already have an account? Login"
            : "New here? Create account"}
        </p>
      </div>
    </div>
  );
}
