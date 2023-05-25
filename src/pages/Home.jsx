import Fashion from "../components/Fashion";
import Nav from "../components/Nav";
import Electronic from "../components/Electronic";
import Jewellery from "../components/Jewellery";
import Footer from "../components/Footer";
import Load from "../components/Load";

const Home = () => {
  return (
    <div>
      <Nav />
      <Fashion />
      <Electronic />
      <Jewellery />
      <Load />
      <Footer />
    </div>
  );
};

export default Home;
