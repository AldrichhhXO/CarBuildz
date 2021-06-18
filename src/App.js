
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Builds from './Pages/Builds'
import Cars from './Pages/Cars'


function App() {
  return (
    <Router>
        <Route exact path = "/" render = {() => <Landing />} />
        <Route exact path = "/cars" render = {() => <Cars />} />
        <Route exact path = "/builds" render = {() => <Builds />} />
    </Router>
  );
}

export default App;
