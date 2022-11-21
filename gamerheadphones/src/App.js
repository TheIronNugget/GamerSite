
import './App.css';
import Features from './features/Features';
import Footer from './footer/Footer';
import Guarantee from './guarantee/Guarantee';
import Hero from './hero/Hero';
import Navbar from './navbar/Navbar';
import ShopSelection from './shopSelection/ShopSelection';
import SiteNav from './siteNav/SiteNav';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Guarantee />
      <Features />
      <ShopSelection />
      <SiteNav />
      <Footer />
    </div>
  );
}

export default App;
