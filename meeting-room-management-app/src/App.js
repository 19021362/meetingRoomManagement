import logo from './logo.svg';
import './styles/App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import SideBar from './components/sideBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.js';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Header />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
