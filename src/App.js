/** @format */
import "./App.css";
import Header from "./components/navbar/Header";
import Banner from "./components/banner/Banner";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import TestinonialsComponent from "./components/sections/feedback/TestinonialsComponent";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

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
        <TestinonialsComponent />
      </div>
      <WhatsAppWidget phoneNumber="+923077534255" />
    </div>
  );
}

export default App;
