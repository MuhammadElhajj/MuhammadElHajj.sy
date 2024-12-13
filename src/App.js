import './App.css'
import Home from "./Home/Home";
import CaseStudies from './Case Studies/CaseStudies';
import Testmonials from './Testmonials/Testmonials';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GetInTouch from './GetInTouch/GetInTouch';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
      <Home />
      <CaseStudies />
      <Testmonials />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
