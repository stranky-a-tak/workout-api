import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container-center">
      <div className="flex flex-col space-y-4">
        <button className="bg-white rounded-xl px-4 py-2">
          <p>Login</p>
        </button>
        <button
          onClick={() => navigate("/register")}
          className="bg-white rounded-xl px-4 py-2"
        >
          <p>Register</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
