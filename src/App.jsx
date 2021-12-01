import "./App.css";
import Header from "./PagesComponent/header";
import Hero from "./PagesComponent/Hero";
import {
  FeatureCard,
  DownloadCardExtension,
  FrequentlyAskedQuestions,
} from "./PagesComponent/featureCard";
import TabContent from "./PagesComponent/TabContent";
import ExtensionBrowserCard from "./PagesComponent/ExtensionBrowserCard";
import Questions from "./PagesComponent/Questions";
import ContactUs from "./PagesComponent/ContactUs";
import Footer from './PagesComponent/Footer'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureCard />
      <TabContent />
      <DownloadCardExtension />
      <ExtensionBrowserCard />
      <FrequentlyAskedQuestions />
      <Questions />
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
