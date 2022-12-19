import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureOne from './components/FeatureOne';
import DailyStats from './components/DailyStats';
import { Card } from './components/Card';
import insurance1 from "./assets/insurance1.svg";
import wallet1 from "./assets/wallet1.svg";
import profit1 from "./assets/profit1.svg";
import SocialMediaPromotion from './components/SocialMediaPromotion';
import DevSection from './components/DevSection';
import { BlogSection } from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  const features = [
    {
      src: wallet1,
      title: "Value",
      description:
        "Swap from your own wallet. Be your own bank. No centralized bridges or wrapping assets",
    },
    {
      src: profit1,
      title: "Yield",
      description:
        "Provide Liquidity and Earn Yield on your Native Assets with Impermanent Loss Protection",
    },
    {
      src: insurance1,
      title: "Insurance",
      description: "Get Impermanent Loss Protection on your Liquidity Pools",
    },
    {
      src: wallet1,
      title: "Staking",
      description:
        "Earn Yield on your Native Assets with Impermanent Loss Protection",
    },
  ];
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <DailyStats />
      <FeatureOne />
      <div className='features-list-container'>
        {
          features.map((feature, index) => {
            return (
              <Card key={index} title={feature.title} imgUrl={feature.src}>{<p>{feature.description}</p>}</Card>
            )
          })
        }
      </div>
      <DevSection />
      <SocialMediaPromotion />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
