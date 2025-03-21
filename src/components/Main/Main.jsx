import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import ProductSection from "../ProductSection/ProductSection";
import Slider from "../Slider/Slider";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <NavigateButtons></NavigateButtons>
      <ProductSection></ProductSection>
      <Footer></Footer>
    </div>
  );
};

export default Main;
