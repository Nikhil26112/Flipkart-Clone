import { makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../Constants/Data";

const Style = makeStyles({
  image: {
    width: "100%",
    height: 280,
  },
  carousel:{
      marginTop: 10
  }
});
const Banner = () => {
  const classes = Style();
  return (
    <Carousel 
        autoPlay={true}
        animation= "slide"
        indicators= {false}
        navButtonsAlwaysInvisible={false}
        cycleNavigation={true}
        navButtonsProps= {{
            style: {
                background: '#ffffff',
                color: '#494949',
                borderRadius: 0,
                margin: 0
            }
        }}
        className={classes.carousel}
    >
      {bannerData.map((image) => (
        <img src={image} className={classes.image} alt="" />
      ))}
    </Carousel>
  );
};

export default Banner;
