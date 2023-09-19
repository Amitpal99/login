import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex m-6 bg-silver justify-around">
        <div className="">
          <div>LOGO</div>
          <h2 className="text-4xl mt-36">Board</h2>
        </div>
        <div className="mt-32">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="mt-3 text-sm">Sign in to your account</p>
          <div className="flex justify-around m-4">
            <button className="flex text-sm">
              <img src="google1.png" className="mr-2 mt-1"></img>Sign in with Google
            </button>
            <button className="flex ml-8 text-sm">
              <img src="apple1.png" className="mr-2 mt-1"></img>Sign in with Apple
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p>Email Address</p>
            <input type="email" className="bg-metal w-80 pl-2 my-4 rounded-md h-8" />
            <p>Password</p>
            <input type="password" className="bg-metal w-80 pl-2 my-4 rounded-md h-8" />
            <br></br>
            <p className="text-blue text-xs">Forget Password?</p>
            <button className="bg-blue text-white w-80 rounded-md mt-3 h-8">Sign In</button>
          </div>
          <div className="my-4 text-center">
            <p className="text-sm">Don't have an account <spam className='text-blue'>Register here?</spam></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
