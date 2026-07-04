import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Promises from "./components/Promises";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
// import Products from "./components/Products";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Products /> */}
      <Product />
      <Promises />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
