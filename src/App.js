
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Builds from './Pages/Builds'
import Cars from './Pages/Cars'
<<<<<<< HEAD
import Map from './Pages/Map'
=======
>>>>>>> 29ca706a4c66906fe71c6ce26baf23fc07ba6260


function App() {
  return (
    <Router>
        <Route exact path = "/" render = {() => <Landing />} />
        <Route exact path = "/cars" render = {() => <Cars />} />
        <Route exact path = "/builds" render = {() => <Builds />} />
<<<<<<< HEAD
        <Route exact path = "/map" render = {() => <Map />} />
=======
>>>>>>> 29ca706a4c66906fe71c6ce26baf23fc07ba6260
    </Router>
  );
}

export default App;
