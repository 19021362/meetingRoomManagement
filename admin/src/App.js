import Header from './components/header.js';
import Footer from './components/footer.js';
import Routes from './Route.js';
import './styles/App.css';
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App container py-3">
        <Header />
        
        <Routes />

        <Footer />
      </div>
    </Router>

  );
};

export default App;
