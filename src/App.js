/** @format */
import "./App.css";
import Header from "./components/navbar/Header";
import Banner from "./components/banner/Banner";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import TestinonialsComponent from "./components/sections/feedback/TestinonialsComponent";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import CompletedProjects from "./components/sections/CompletedProjects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div>
        <Banner />
      </div>

      <div>
        <Services />
        <Portfolio />
        <CompletedProjects />
        <TestinonialsComponent />
        <Contact />
        <Footer />
      </div>
      <WhatsAppWidget phoneNumber="+923077534255" />
    </div>
  );
}

export default App;
