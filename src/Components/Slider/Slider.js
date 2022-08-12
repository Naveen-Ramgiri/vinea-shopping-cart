import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import '../Slider/Slider.css';
// import { GrPrevious } from "react-icons/gr";
// import { GrNext } from "react-icons/gr";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath:
      "https://i.postimg.cc/cJp74TXD/Carousel-image-desktop.png"
  },
  {
    imgPath:
      "https://i.postimg.cc/cJp74TXD/Carousel-image-desktop.png"
  },
  {
    imgPath:
      "https://i.postimg.cc/cJp74TXD/Carousel-image-desktop.png"
  }
];

const styles = (theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1
  },
  img: {
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%"
  }
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <div className="heroslider">
                    <div class="aem-Grid aem-Grid--12">
                      <div class="aem-GridColumn aem-GridColumn--default--6">
                        <div className="heroslider__left">
                          <h1 className="slidertitle">Shop the new <br />Signature Collection</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                          <NavLink className="button-primary" to="/allproducts">shop now</NavLink>
                        </div>
                      </div>
                      <div class="aem-GridColumn aem-GridColumn--default--6">
                        <div className="heroslider__right">
                          <img
                            className={classes.img}
                            src={step.imgPath}
                            alt={step.label}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >

              {theme.direction === "rtl" ? (
                <BsChevronLeft />
              ) : (
                <BsChevronRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <BsChevronRight />
              ) : (
                <BsChevronLeft />
              )}
            </Button>
          }
        />
      </div>
    );
  }
}
SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);
