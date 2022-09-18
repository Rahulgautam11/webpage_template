import './App.css';
import SideNav from './components/Side.Nav';
import TopBar from './components/TopBar';
import DepositeTable from './components/DepositeTable';


function App() {
  return (
    <div>
      <SideNav />
      <TopBar/>
      <DepositeTable/>
    </div>
  );
}

export default App;
