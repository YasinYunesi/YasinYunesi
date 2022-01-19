import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Education from "./Components/Education/Education";
import "./App.scss";

function App() {
  return (
    <div className='app'>
      {/* banner */}
      <Banner />

      {/* navbar */}
      <Navbar />

      {/* about */}
      <About />

      {/* Projects (portfolio) */}
      <Portfolio />

      {/* Education */}
      <Education />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
