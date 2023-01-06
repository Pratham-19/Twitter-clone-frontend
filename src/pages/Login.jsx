import './random.css'
import React from "react";
import { Link} from "react-router-dom";
import {useEffect,useState} from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
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
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const functionHandlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
      setSnackMessage("Login Successful");
      setOpen(true);
			window.location.href = '/'
		} else {
      setSnackMessage('Please check your username and password');
      setOpenErr(true);
		}
  };
  return (
    <>
      <div className="form vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form>
            <div className='heading-main'>Sign In</div>
            <div className="form-group txt-change">
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={handleEmail}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group txt-change">
              <input
                type="password"
                value={password}
                onChange={functionHandlePassword}
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="text-right">
              <Link to="/reset">Forgot Password?</Link>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="form-checkbox"
              />
              <label className="custom-control-label" htmlFor="form-checkbox">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              <div className={`${loader ? "d-none" : "d-block"}`}>Sign In</div>
                {/* <Loader loading={loader} /> */}
            </button>
          </form>
          <h2>
            Don't have an account? <Link to="/signup">Sign up here</Link>
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
export default Login;