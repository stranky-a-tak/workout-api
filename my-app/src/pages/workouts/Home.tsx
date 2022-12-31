const Home: React.FC = () => {
  return (
    <div className="container-center">
      <div className="flex flex-col space-y-4">
          <button className="bg-white rounded-xl px-4 py-2">
            <p>Login</p> 
          </button>
          <button className="bg-white rounded-xl px-4 py-2">
            <p>Register</p> 
          </button>
      </div>
    </div>
  );
};

export default Home;
