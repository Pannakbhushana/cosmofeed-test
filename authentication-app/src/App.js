import logo from './logo.svg';
import './App.css';
import Navbar from './Router/Navbar';
import AllRoutes from './Router/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
