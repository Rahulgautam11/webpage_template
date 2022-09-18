import './App.css';
import LeftNav from './components/LeftNav';
import TopBar from './components/TopBar';
import DepositeTable from './components/DepositeTable';


function App() {
  return (
    <div>
      <LeftNav />
      <TopBar/>
      <DepositeTable/>
    </div>
  );
}

export default App;
