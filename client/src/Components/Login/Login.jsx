import {
  Box,
  DialogContent,
  TextField,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import { useState } from "react";
import { authenticateSignup } from "../service/api.js";

const useStyles = makeStyles({
  login: {
    padding: "15px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  component: {
    height: "60vh",
    width: "70vh",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  loginBtn: {
    textTransform: "none",
    background: "#fb6418",
    color: "#fff",
    height: 48,
    borderRadius: 2,
  },
  requestBtn: {
    textTransform: "none",
    background: "#ffffff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  createText: {
    textAlign: "center",
    marginTop: "auto",
    fontSize: 12,
    color: "#2874f0",
    fontWeight: 600,
    cursor: "pointer",
  },
  image: {
    backgroundImage: `url(${`https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png`})`,
    height: "60vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "& > *": {
      color: "#fff",
      fontWeight: 600,
    },
  },
});

const initialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: `Looks like you're new here!`,
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const Login = ({ open, setOpen }) => {
  const [account, setAccount] = useState(initialValue.login);
  const [signup, setSignup] = useState(signupInitialValues);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
    setAccount(initialValue.login);
  };

  const toggleAccount = () => {
    setAccount(initialValue.signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component} style={{ padding: 0 }}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField name="username" label="Enter Email/Mobile number" />
              <TextField name="password" label="Enter password" />
              <Typography className={classes.text}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button variant="contained" className={classes.loginBtn}>
                Login
              </Button>
              <Typography
                className={classes.text}
                style={{ textAlign: "center" }}
              >
                Or
              </Typography>
              <Button variant="contained" className={classes.requestBtn}>
                Request OTP
              </Button>
              <Typography
                onClick={() => toggleAccount()}
                className={classes.createText}
              >
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter firstname"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter lastname"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter username"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="Email"
                label="Enter Email"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter password"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="Phone"
                label="Enter Mobile number"
              />
              <Button
                variant="contained"
                onClick={() => signupUser()}
                className={classes.loginBtn}
              >
                Signup
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
