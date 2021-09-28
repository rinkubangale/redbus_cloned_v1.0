import './App.css';
import { Navbar } from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import Number from "./Components/numberPage/number";
import Travel from "./Components/Travels/Travels";

function App() {
  return (
    <div>
      <Navbar />
      <Number />
      <Travel />
      <Footer />
    </div>
  );
}

export default App;
