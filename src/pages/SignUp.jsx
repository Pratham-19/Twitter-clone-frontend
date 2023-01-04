import React, { useState, useRef } from "react";
import './random.css'
import { Link, useNavigate } from "react-router-dom";
import {useEffect} from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const  SignUp =() => {
  const [open, setOpen] = useState(false);
const [snackMessage,setSnackMessage]=useState("");
  const [openErr, setOpenErr] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setOpenErr(false);
  };
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    name: "",
    emailUser: "",
    password: "",
    confirmPassword: "",
  });
  //handling the input field
  const handleInput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setLoginData({ ...loginData, [name]: value });
  };
  //checking the password and confirm password matches or not
  const checkPassword = () => {
    if (loginData.password === loginData.confirmPassword) {
      return true;
    }
    return false;
  };
  const [checked, setChecked] = useState(false);
  //submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    if(checked === false){
      setSnackMessage("Please Agree to terms and conditions");
      setOpenErr(true);
      // alert("Please Agree to terms and conditions");
    }
    else if (checkPassword()) {
      let n=loginData.name;
      let e=loginData.emailUser;
      let p=loginData.password;
      //perform the api call
            try {
              const response = await fetch('http://localhost:3001/api/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				n,
				e,
				p,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			navigate('/signin')
		}
      } catch (error) {
        // setSnackMessage("Something went wrong");
        setSnackMessage(error);
        setOpenErr(true);
      }
    } 
    else {
      setSnackMessage("Password and confirm password does not match");
      setOpenErr(true);
      // alert("Password and confirm password does not match");
    }
  };

  const checkAgreement = (e) =>
  {
    console.log(checkboxRef.current.checked);
    setChecked(checkboxRef.current.checked);
  }
  const checkboxRef = useRef();
  return (
    <>
      <div className="form vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form>
            <div className='heading-main'>Create Account</div>
            <div className="form-group txt-change">
              <input
                type="text"
                value={loginData.name}
                name="name"
                onChange={handleInput}
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-group txt-change">
              <input
                type="email"
                value={loginData.emailUser}
                name="emailUser"
                onChange={handleInput}
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group txt-change">
              <input
                type="password"
                value={loginData.password}
                onChange={handleInput}
                name="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group txt-change">
              <input
                type="password"
                value={loginData.confirmPassword}
                onChange={handleInput}
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="custom-control custom-checkbox txt-change">
              <input
                type="checkbox"
                name="checked"
                className="custom-control-input"
                onChange={checkAgreement}
                ref={checkboxRef}
                value={checked}
                id="form-checkbox"
                required
              />
              <label className="custom-control-label" htmlFor="form-checkbox">
                I agree to the{" "}
                <Link to="/terms-and-conditions" target="_blank">Terms & Conditions</Link>
              </label>
            </div>
            <button
              type="submit"
              onClick={submitHandler}
              className="btn btn-primary"
            >
              Create Account
            </button>
          </form>
          <h2>
            Already have an account?
            <Link to="/signin"> Sign in here</Link>
          </h2>
        </div>
      </div>
      <Snackbar 
  anchorOrigin={{
    horizontal: "right",
    vertical: "top",
  }}
  open={open} autoHideDuration={5000} onClose={handleClose} message={'Hi'} >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {snackMessage}
            </Alert> 
          </Snackbar>
                    <Snackbar 
  anchorOrigin={{
    horizontal: "right",
    vertical: "top",
  }}
  open={openErr} autoHideDuration={5000} onClose={handleClose} message={'Hi'} >
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {snackMessage}
            </Alert> 
          </Snackbar>
    </>
  );
}
export default SignUp;