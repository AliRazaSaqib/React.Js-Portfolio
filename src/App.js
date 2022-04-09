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

{
  /*************************************  Developer Information *************************************/
  /* Developer Name = Ali Raza */
  /* Country = Pakistan */
  /* Contact Information = +923077534255 */
  /* Copyright = All right reserved */
}

function App() {
  return (
    <div className="App">
      {/******  For top header ******/}
      <div>
        <Header />
      </div>

      {/******  For hero-section  ******/}
      <div>
        <Banner />
      </div>

      {/******  For all body sections ******/}
      <div>
        <Services />
        <Portfolio />
        <CompletedProjects />
        <TestinonialsComponent />
        <Contact />
        <Footer />
      </div>
      <WhatsAppWidget
        phoneNumber="your mobile number"
        chatPersonName="Support"
        chatMessage={
          <>
            Hi there 👋 <br />
            <br /> How can I help you?
          </>
        }
      />
    </div>
  );
}

export default App;
