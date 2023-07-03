import { useState } from "react";
import TextField from "@mui/material/TextField";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';

export default function MyForm() {
  const [inputs, setinputs] = useState({});
  const [alert,setalert] = useState(false)

  const handlechange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    setinputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  const handlesignup = ()=>{

    setalert(!alert)
    setTimeout(() => {
        setalert(false)
    }, 3000);
    console.log("signed up successfully")
  }
  const handlevalidate = ()=>{
    console.log("otp validation is under process")
  }

  return (
    <>
    {alert && <Alert severity="success">Congrats You have successfully signed up</Alert>}
      <form onSubmit={handleSubmit} className="grid w-96 m-auto space-y-2">
        <h1 className="text-black m-auto font-bold text-2xl">Sign Up</h1>
        <TextField
          id="outlined-basic"
          label="Company Name"
          name="company"
          variant="outlined"
          onChange={handlechange}
          InputProps={{
            endAdornment: <InputAdornment position="start">{(inputs.company === undefined || inputs.company === "") && <ErrorOutlineIcon/>}</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          onChange={handlechange}
          InputProps={{
            endAdornment: <InputAdornment position="start">{(inputs.email === undefined || inputs.email === "") && <ErrorOutlineIcon/>}</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Mobile No"
          name="mobile"
          variant="outlined"
          onChange={handlechange}
          InputProps={{
            endAdornment: <InputAdornment position="start">{(inputs.mobile === undefined || inputs.mobile === "") && <ErrorOutlineIcon/>}</InputAdornment>,
          }}
        />
        <div className="flex">
        <TextField
          id="outlined-basic"
          label="OTP"
          name="otp"
          variant="outlined"
          className="basis-1/2"
          onChange={handlechange}
          InputProps={{
            endAdornment: <InputAdornment position="start">{(inputs.otp === undefined || inputs.otp === "") && <ErrorOutlineIcon/>}</InputAdornment>,
          }}
        />
        <button className="basis-1/2 border-2 bg-slate-300 hover:bg-slate-800 hover:text-white" onClick={handlevalidate}>validate</button>
        </div>
        <TextField
          id="outlined-basic"
          label="Password"
          name="password"
          variant="outlined"
          onChange={handlechange}
          InputProps={{
            endAdornment: <InputAdornment position="start">{(inputs.password === undefined || inputs.password === "") && <ErrorOutlineIcon/>}</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          name="confirm"
          variant="outlined"
          onChange={handlechange}
          InputProps={{
            endAdornment: <InputAdornment position="start">{(inputs.confirm === undefined || inputs.confirm === "")  && <ErrorOutlineIcon/>}</InputAdornment>,
          }}
        />
        <button variant="outlined" type="submit" color="black" className="w-40 h-10 justify-self-center border-2 border-black" onClick={handlesignup}>Sign Up</button>
        <label for="javascript">Already Have an Account <a href="https://www.google.com/" className="text-blue-700 hover:text-sky-500">SignIn</a></label>
      </form>
    </>
  );
}
