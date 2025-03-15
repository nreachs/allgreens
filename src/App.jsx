import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickMessage from "./components/QuickMessage";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton";
import OurProducts from "./components/OurProducts";
import OurImpact from "./components/OurImpact";
import OurOperation from "./components/OurOperation";


const App = () => {
  return (
    <div>
      <Navbar />
      <main className="overflow-x-hidden antialiased">
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>
        <div id="impact">
          <OurImpact/>
        </div>
        <div id="operation">
          <OurOperation/>
        </div>
        <QuickMessage />
        <div id="products">
          <OurProducts />
        </div>
        
        <div id="contact">
        <ContactUs />
        </div>
        <Footer />
      </main>
      <ScrollUpButton />
    </div>
  );
};

export default App;
