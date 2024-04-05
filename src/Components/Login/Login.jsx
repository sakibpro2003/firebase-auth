import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const Login = () => {
  const {loginInfo} = useContext(AuthContext);

  

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(password, email);
    loginInfo(email,password);
    
    
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2 className="text-center text-4xl">Login</h2>
        <input type="email" name="email" placeholder="email" /> <br />
        <br />
        <input type="password" name="password" placeholder="password" />
        <button type="submit" className="btn">
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
