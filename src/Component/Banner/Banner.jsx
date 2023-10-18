import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import samsung from "../../assets/images/samsung phone.jpg";
import iphone15 from "../../assets/images/Apple-iPhone-15-Pro.jpg";
import iphone15Pro from "../../assets/images/download.jpg";
import intel from "../../assets/images/download (1).jpg";
import google from "../../assets/images/acastro_210104_1777_google_0001.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const slider = (
  <AutoplaySlider
  play={true}
  // cancelOnInteraction={false} // should stop playing on user interaction
  interval={6000}
  >
    <div data-src={samsung} />
    <div data-src={iphone15} />
    <div data-src={iphone15Pro} />
    <div data-src={intel} />
    <div data-src={google} />
  </AutoplaySlider>
);

const Banner = () => {
  return <div className="z-0">{slider}</div>;
};

export default Banner;
