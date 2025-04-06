import { useState } from 'react';
import { registerUser } from '../../services/api';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await registerUser(email, password);
      setSuccess(true);
    } catch (error) {
      setError(error.message || 'Registration failed');
    }
  };

  if (success) {
    return (
      <div className="relative max-w-2xl w-full mx-auto">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 opacity-20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 opacity-20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-200 opacity-15 rounded-full blur-2xl" />
        </div>
        
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center transition-all duration-1000 border border-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome Aboard!</h2>
          <p className="mb-6 text-gray-600">Your account has been created successfully.</p>
          <Link
            to="/auth/login"
            className="inline-block text-blue-500 hover:text-blue-600 transition-all duration-1000 font-medium"
          >
            Proceed to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-2xl w-full mx-auto">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-200 opacity-15 rounded-full blur-2xl" />
      </div>
      
      <div className="bg-white p-10 rounded-2xl shadow-xl transition-all duration-1000 border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Create Account</h2>
        {error && (
          <div className="mb-6 text-red-500 bg-red-50 p-3 rounded-lg transition-all duration-1000">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 block w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-1000 placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 block w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-1000 placeholder-gray-400"
              placeholder="Create a password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-1000 font-medium"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Already registered? </span>
          <Link to="/auth/login" className="text-blue-500 hover:text-blue-600 transition-all duration-1000">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}