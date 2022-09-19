import { Badge, Box, Button, makeStyles, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useState } from "react";

//components
import LoginDialog from "../Login/Login";


const Style = makeStyles({
  login: {
    background: "#fff",
    color: "#2874f0",
    textTransform: "none",
    fontWeight: 700,
    borderRadius: 2,
    padding: "3px 40px",
    boxShadow: "none",
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      //   fontSize: 12,
      alignItems: "center",
      textDecoration: "none",
      color: "#fff",
    },
  },
  container: {
    display: "flex",
  },
});
const HeaderButtons = () => {
  const [ open, setOpen ] = useState(false)

  const openLoginDialog = () => {
    setOpen(true)
  }
  const classes = Style();
  return (
    <Box className={classes.wrapper}>
      <Link>
        <Button variant="contained" onClick={() => openLoginDialog()} className={classes.login}>
          Login
        </Button>
      </Link>
      <Link>
        <Typography style={{ marginTop: 5 }}>More</Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={26} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} />
    </Box>
  );
};
export default HeaderButtons;
