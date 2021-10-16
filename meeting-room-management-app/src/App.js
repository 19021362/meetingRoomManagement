import Header from './components/header.js';
import Footer from './components/footer.js';
import Routes from './Route.js';
import './styles/App.css';
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from 'react-bootstrap';


function App() {
  return (
    <div className="App container py-3">
      <Header />
      
      <Routes />

      <Footer />
    </div>
  );
};

export default App;
