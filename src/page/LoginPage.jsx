import { Button } from "flowbite-react";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
//

export default function LoginPage() {
  const [inputs, setInputs] = useState({
    corporate: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div>
      <div className="mt-2 flex flex-col items-center justify-center gap-2">
        <img
          src="/logo.jpeg"
          alt="doctor"
          className="w-32 h-32 border rounded-full object-cover"
        />

        <p className="font-bold text-blue-800">Health Desk</p>
        <h2 className="text-xl font-semibold">Corporate Login</h2>
        <p className="text-sm ">Hi, Welcome Back!</p>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {/* form */}
        <form
          className="w-1/2 bg-white shadow-md rounded-md p-6"
          onSubmit={handleLogin}
        >
          <label htmlFor="corporate-name" className="font-semibold">
            Corporate Name
          </label>
          <div className="flex items-center border rounded-md shadow-sm mt-2">
            <span className="p-2 text-gray-500">
              <FaUser />
            </span>
            <select
              id="corporate-name"
              name="corporate"
              value={inputs.corporate}
              onChange={handleChange}
              className="flex-1 p-2 border-none focus:outline-none"
            >
              <option value="">Select Corporate</option>
              <option value="Test1">Test1</option>
              <option value="Test2">Test2</option>
              <option value="Test3">Test3</option>
              <option value="Test4">Test4</option>
            </select>
          </div>

          {/* Username */}
          <label htmlFor="username" className="font-semibold">
            Username
          </label>
          <div className="flex items-center border rounded-md shadow-sm mt-2 mb-4">
            <span className="p-2 text-gray-500">
              <FaUser />
            </span>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={inputs.username}
              onChange={handleChange}
              className="flex-1 p-2 border-none focus:outline-none"
            />
          </div>

          {/* Password */}
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <div className="flex items-center border rounded-md shadow-sm mt-2 mb-4">
            <span className="p-2 text-gray-500">
              <FaLock />
            </span>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={handleChange}
              className="flex-1 p-2 border-none focus:outline-none"
            />
          </div>

          <Button
            className="mx-auto w-full text-white z-10"
            style={{ backgroundColor: "#1F2587" }}
            disabled={!inputs.username}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
