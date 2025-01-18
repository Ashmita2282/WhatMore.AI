import { useState } from "react";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/logo.png" alt="Whatmore" className="w-12" />
        </div>
        
        <h2 className="text-2xl font-semibold text-center mt-4">
          Sign in to your Account
        </h2>

        {/* Google Sign-in Button */}
        <button className="w-full mt-4 flex items-center justify-center bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700">
          <img src="/google-icon.png" alt="Google" className="w-5 mr-2" />
          Sign In with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email Field */}
        <label className="block text-gray-600 mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Password Field */}
        <label className="block text-gray-600 mt-4 mb-1">Password</label>
        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter your Password"
            className="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            className="absolute right-3 top-3 text-gray-600"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? "👁️" : "🙈"}
          </button>
        </div>

        {/* Sign-in Button */}
        <button className="w-full bg-pink-600 text-white py-2 rounded-lg mt-4 hover:bg-pink-700">
          Sign in
        </button>

        {/* Links */}
        <div className="text-center mt-3">
          <a href="#" className="text-blue-500 text-sm">Forgot your password?</a>
        </div>
        <div className="text-center mt-2">
          <span className="text-gray-600 text-sm">Don't have an account?</span>
          <a href="#" className="text-pink-500 text-sm ml-1">Sign Up</a>
        </div>

        <p className="text-center text-gray-400 text-xs mt-4">
          © 2024 by WittyByte Technologies Pvt. Ltd.
        </p>
      </div>
    </div>
  );
};

export default Login;
