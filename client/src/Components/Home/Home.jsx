import { Box, makeStyles } from "@material-ui/core";
import Banner from "./Banner";
import MidSection from "./MidSection";
import NavBar from "./NavBar";
import Slide from "./Slide";

const Style = makeStyles({
  component: {
    padding: 10,
    background: "#f2f2f2",
  },
});
const Home = () => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  const classes = Style();
  return (
    <>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "80%" }}>
            <Slide timer={true} 
            title="Deal of the day" />
          </Box>
          <Box
            style={{
              background: "#ffffff",
              padding: 5,
              margon: "12px 0 0 10px",
              width: "83%",
            }}
          >
            <img src={adURL} alt="" style={{ width: 230 }} />
          </Box>
        </Box>
        <MidSection />
          <Slide timer={false} title="Sale Chl rahi hai"/>
          <Slide timer={false} title="Suggested Items"/>
          <Slide timer={false} title="Best items"/>
          <Slide timer={false} title="Recommended Items"/>
          <Slide timer={false} title="Best Collection"/>
      </Box>
    </>
  );
};

export default Home;
