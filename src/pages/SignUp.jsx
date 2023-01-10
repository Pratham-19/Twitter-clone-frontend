import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [tagname, setTagname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // const [btnDisabled, setBtnDisabled] = useState(true);
  // const [errMsg, setErrMsg] = useState("");
  const [termsAndCondition, setTermsAndCondition] = useState(false);
  // useEffect(() => {
  //   if (username && tagname && email && password && confirmPassword) {
  //     setBtnDisabled(false);
  //   } else {
  //     setErrMsg("Please fill all the fields");
  //     setBtnDisabled(true);
  //   }
  // }, [username, tagname, email, password, confirmPassword]);
  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setTermsAndCondition(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username &&
      tagname &&
      email &&
      password &&
      confirmPassword &&
      termsAndCondition
    ) {
      if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
        if (
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            password
          )
        ) {
          if (password === confirmPassword) {
            axios
              .post("http://localhost:3002/users/signup", {
                username: username,
                tagname: tagname,
                email: email,
                password: password,
              })
              .then((res) => {
                if (res.data.success === true) {
                  navigate("/login");
                }
              })
              .catch((err) => {
                if (err.response.status === 409) {
                  // setErrMsg("Email already exists");
                  window.alert("Email or Tagname already exists");
                }
                console.log(err);
              });
          } else {
            // setErrMsg("Password and Confirm Password do not match");
            window.alert("Password and Confirm Password do not match");
          }
        } else {
          window.alert(
            "Password must be 8 characters long and contain at least one letter , one special character and one number"
          );
        }
      } else {
        // setErrMsg("Please enter a valid email");
        window.alert("Please enter a valid email");
      }
    } else {
      // setErrMsg("Please fill all the fields");
      window.alert("Please fill all the fields");
    }
  };

  return (
    <div className="flex h-[100vh] justify-center ">
      <form className="flex flex-col min-w-[24vw] m-auto">
        <h2 className=" text-center text-xl mb-3">Sign Up</h2>
        <input
          className="my-2 p-3 rounded-[5px] bg-[rgb(43,43,69)] border-none text-base text-white h-[50px]"
          type="text"
          placeholder="Username"
          onChange={(val) => {
            setUsername(val.target.value);
          }}
        />
        <input
          className="my-2 p-3 rounded-[5px] bg-[rgb(43,43,69)] border-none text-base text-white h-[50px]"
          type="text"
          placeholder="Tagname"
          onChange={(val) => {
            setTagname(val.target.value);
          }}
        />
        <input
          className="my-2 p-3 rounded-[5px] bg-[rgb(43,43,69)] border-none text-base text-white h-[50px]"
          type="text"
          placeholder="Email"
          onChange={(val) => {
            setEmail(val.target.value);
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
        <input
          className="my-2 p-3 rounded-[5px] bg-[rgb(43,43,69)] border-none text-base text-white h-[50px]"
          type="password"
          placeholder="Confirm Password"
          onChange={(val) => {
            setConfirmPassword(val.target.value);
          }}
        />
        <div className="my-3">
          <input
            type="checkbox"
            placeholder="I Accept Terms & Conditions"
            id="form-checkbox"
            onClick={(e) => {
              handleCheckBox(e);
            }}
          />
          <label className="text-white ml-3 " htmlFor="form-checkbox">
            I Accept
            <Link
              to="/t&c"
              className="ml-1 text-[rgb(56,106,255)] underline underline-offset-4"
            >
              Terms & Conditions
            </Link>
          </label>
        </div>
        <button
          className="bg-[rgb(56,106,255)] text-white rounded-[5px] p-[10px] border-none text-lg  mt-4 hover:-translate-y-0.5"
          onClick={(e) => handleSubmit(e)}
          // disabled={btnDisabled}
        >
          Submit
        </button>
        <h2 className=" text-md my-2 text-[#ffffffe6] ">
          Already have an account ?{" "}
          <Link
            className="text-[rgb(56,106,255)] hover:underline underline-offset-2"
            to="/login"
          >
            Login
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default SignUp;
