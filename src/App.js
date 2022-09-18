import './App.css';
import SideNav from './components/Side.Nav';
import TopBar from './components/TopBar';
import TransactionTable from './components/TransactionTable';


function App() {
  return (
    <div>
      <SideNav />
      <TopBar/>
      <TransactionTable/>
    </div>
  );
}

export default App;