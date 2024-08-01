import AboutComp from "./components/about/AboutComp";
import BannerComp from "./components/bannerComp/BannerComp";
import ContactComp from "./components/contact/ContactComp";
import FooterComp from "./components/footer/FooterComp";
import HeaderComp from "./components/header/HeaderComp";
import PricingComp from "./components/pricing/PricingComp";
import ServicesComp from "./components/services/ServicesComp";
import TechnologyComp from "./components/technology/TechnologyComp";
import './functions/headerAnimationFunc'
import './functions/technologyAnimationFunc'
import './functions/pageAnimationFunc'

function App() {
  return (
    <div className="h-[200vb]">
      <HeaderComp/>
      <BannerComp/>
      <AboutComp/>
      <ServicesComp/>
      <ContactComp/>
      <TechnologyComp/>
      <PricingComp/>
      <FooterComp/>
    </div>
  );
}

export default App;
