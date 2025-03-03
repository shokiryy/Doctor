import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign up'); // Corrected typo here

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Handle your form submission logic here, like calling an API
    console.log({ name, email, password });
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-gray-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === 'Sign up' ? "Create Account" : "Login"}
        </p>
        <p>
          {state === 'Sign up'
            ? "Please sign up to create your account."
            : "Please log in to access your account."}
        </p>

        {state === 'Sign up' && (
          <div className="w-full">
            <p>toliq isimingiz</p>
            <input
              className="border border-x-gray-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-x-gray-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-x-gray-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === 'Sign up' ? "Create Account" : "Login"}
        </button>

        {state === 'Sign up' ? (
          <p>
         sizda account bormi ?{' '}
            <span
              onClick={() => setState('Login')}
              className="text-primary underline cursor-pointer"
            >
              Login qiling bu yerda
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?{' '}
            <span
              onClick={() => setState('Sign up')}
              className="text-primary underline cursor-pointer"
            >
              Create an account
            </span>
          </p>
        )}
      </div>
    </form>
  );
};
export default Login;