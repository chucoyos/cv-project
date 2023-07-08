import './App.css';
import DescriptionCard from './components/DescriptionCard';

function App() {
  return (
    <div className='cardContainer'>
    <DescriptionCard logo='🍎️'/>
    <DescriptionCard logo='🍄️'/>
    <DescriptionCard logo='🍓️'/>
    </div>
  );
}

export default App;
