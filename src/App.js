import './App.css';
import DescriptionCard from './components/DescriptionCard';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <DescriptionCard logo='🍎️'/>
    <DescriptionCard logo='🍄️'/>
    <DescriptionCard logo='🍓️'/>
    <Footer />
    </>
  );
}

export default App;
