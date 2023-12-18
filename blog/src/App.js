import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
                <Blog/>
                <Services/>
                <Contact/>
              </Route>
              {/* <Route path="/service" component={Services} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} /> */}
            </Switch>
          </div>
        </div>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;

