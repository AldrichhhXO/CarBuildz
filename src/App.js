
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Builds from './Pages/Builds'
import Cars from './Pages/Cars'
import Map from './Pages/Map'


function App() {
  return (
    <Router>
        <Route exact path = "/" render = {() => <Landing />} />
        <Route exact path = "/cars" render = {() => <Cars />} />
        <Route exact path = "/builds" render = {() => <Builds />} />
        <Route exact path = "/map" render = {() => <Map />} />
    </Router>
  );
}

export default App;
