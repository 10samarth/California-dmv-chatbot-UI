import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Info from './components/info/info';
import Chat from './components/chat/chat';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <Info />
      <Chat />
      </div>
    </div>
  );
}

export default App;
