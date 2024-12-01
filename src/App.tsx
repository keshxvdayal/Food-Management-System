import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AwardsSection from './components/AwardsSection';
import Inventory from "./components/Inventory"
import './index.css';
import KeyBenefits from './components/Keybenefits';
import BeforeAfterSection from './components/BeforeAfterSection';
import InventoryToolInfo from './components/InventoryToolInfo';
import InventoryFeature from './components/InventoryFeature';
import Footer from './components/Footer';
import FeaturesPage from './components/Features';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <FeaturesPage />
      <AwardsSection />
      <Inventory />
      <KeyBenefits />
      <BeforeAfterSection />
      <InventoryToolInfo />
      <InventoryFeature />
      <Footer />
    </div>
  );
};

export default App;
