import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userCredential, setUserCredential] = useState();
  const [password, setPassword] = useState();
  // const [errMsg, setErrMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCredential && password) {
      if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(userCredential)) {
        axios
          .post("http://localhost:3002/users/login", {
            email: userCredential,
            password: password,
          })
          .then((res) => {
            if (res.data.message === "Auth successful" && res.data.token) {
              localStorage.setItem("token", res.data.token);
              navigate("/");
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              window.alert("Auth failed wrong credentials");
            }
            console.log(err);
          });
      } else {
        axios
          .post("http://localhost:3002/users/login", {
            tagname: userCredential,
            password: password,
          })
          .then((res) => {
            if (res.data.message === "Auth successful" && res.data.token) {
              localStorage.setItem("token", res.data.token);
              navigate("/congo");
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              window.alert("Auth failed wrong credentials");
            }
            console.log(err);
          });
      }
    }
  };
  return (
    <div className="flex h-[100vh] justify-center ">
      <form className="flex flex-col min-w-[24vw] m-auto">
        <h2 className=" text-center text-xl mb-3">Login</h2>
        <input
          className="my-2 p-3 rounded-[5px] bg-[rgb(43,43,69)] border-none text-base text-white h-[50px]"
          type="text"
          placeholder="Email or Tagname"
          onChange={(val) => {
            setUserCredential(val.target.value);
          }}
        />
        <input
          className="my-2 p-3 rounded-[5px] bg-[rgb(43,43,69)] border-none text-base text-white h-[50px]"
          type="password"
          placeholder="Password"
          onChange={(val) => {
            setPassword(val.target.value);
          }}
        />
        <Link
          className="text-end text-sm text-[#ffffffe6] hover:text-[rgb(56,106,255)] hover:underline underline-offset-2"
          to="/help"
        >
          Forgot Password?
        </Link>
        <div className="my-2">
          <input
            type="checkbox"
            placeholder="I Accept Terms & Conditions"
            id="form-checkbox"
            onClick={(e) => {}}
          />
          <label className="text-white ml-[6px]" htmlFor="form-checkbox">
            Remember Me
          </label>
        </div>
        <button
          className="bg-[rgb(56,106,255)] text-white rounded-[5px] p-[10px] border-none text-lg  mt-4 hover:-translate-y-0.5"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </button>
        <h2 className=" text-md my-2 text-[#ffffffe6] ">
          Don't have an account?{" "}
          <Link
            className="text-[rgb(56,106,255)] hover:underline underline-offset-2"
            to="/signup"
          >
            Create Account
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Login;
