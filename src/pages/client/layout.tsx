import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Support from "../../components/Support";
import Home from "./Home/Home";

function LayoutWebsite() {
  return (
    <div>
      <Header />
      <Banner />
      <Home />
      <Support />
      <Footer />
    </div>
  );
}

export default LayoutWebsite;
