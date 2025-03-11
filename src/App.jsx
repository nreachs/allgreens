import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickMessage from "./components/QuickMessage";
import About from "./components/About";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton";

const App = () => {
  return (
    <div>
      <main className="overflow-x-hidden antialiased">
        <Navbar />
        <Hero />
        <QuickMessage />
        <About />
        <Services />
        <ContactUs />
        <Footer />
        <ScrollUpButton />
      </main>
    </div>
  );
};

export default App;
