import './App.css';
import React from "react"; 
import { Routes, Route} from "react-router-dom";
import HomeEvents from './pages/HomeEvents';
import ServicesEvents from './pages/ServicesEvents';
import ProductsEvents from './pages/ProductsEvents';
import AboutEvents from './pages/AboutEvents';
import PortfolioEvents from './pages/PortfolioEvents';
import FAQEvents from './pages/FAQEvents';
import ContactsEvents from './pages/ContactsEvents';
import MeaseringEvents from './pages/MeaseringEvents';
import CalculationEvents from './pages/CalculationEvents';
import Nav from './layout/Nav';

const App = () => { 
  return (
    <>
    <Nav/>
      <Routes> 
        <Route path="/" element={<HomeEvents />} />
        <Route path="/services" element={<ServicesEvents />} /> 
        <Route path="/products" element={<ProductsEvents />} />  
        <Route path="/about" element={<AboutEvents />} /> 
        <Route path="/portfolio" element={<PortfolioEvents />} /> 
        <Route path="/faq" element={<FAQEvents />} /> 
        <Route path="/contacts" element={<ContactsEvents />} />
        <Route path="/measering" element={<MeaseringEvents />} /> 
        <Route path="/calculation" element={<CalculationEvents />} /> 
      </Routes> 
    </>
  ); 
}; 


export default App;
