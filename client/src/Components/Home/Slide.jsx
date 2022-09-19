import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../../Constants/Data";
import {
  Box,
  Button,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Countdown from "react-countdown";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Style = makeStyles({
  image: {
    height: 150,
  },
  component: {
    marginTop: 12,
    background: "#ffffff",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
    marginRight: 25,
  },
  deal: {
    padding: "15px 20px",
    display: "flex",
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginLeft: "auto",
    background: "#2874f0",
    borderRadius: 2,
    fontSize: "11px",
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  wrapper: {
    padding: "35px 15px",
  },
});

const Slide = ({ timer, title }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const classes = Style();
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours}:{minutes}:{seconds} left
      </span>
    );
  };
  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{title}</Typography>

        {
        timer &&
          <>
            <img src={timerURL} style={{ width: 24 }} alt="" />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              View All
            </Button>
          </>
        }
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        draggable={false}
        swipable={false}
        centerMode={true}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={false}
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {products.map((product) => (
          <Box textAlign="center" className={classes.wrapper}>
            <img src={product.url} className={classes.image} alt="" />
            <Typography
              className={classes.text}
              style={{ fontWeight: 600, color: "#212121" }}
            >
              {product.title.shortTitle}
            </Typography>
            <Typography className={classes.text} style={{ color: "green" }}>
              {" "}
              {product.discount}{" "}
            </Typography>
            <Typography
              className={classes.text}
              style={{ color: "#212121", opacity: ".6" }}
            >
              {" "}
              {product.tagline}{" "}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
