import { useContext } from "react";
import { authContext } from "../../AuthProvider";



const Home = () => {
  const user = useContext(authContext);
  console.log(user);
  return (
    <div>
      <h2>this is home </h2>
    </div>
  );
};

export default Home;
