import logo from './logo.svg';
import './App.css';
import Save from "./pages/save";
import Search from "./pages/search"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Title from "./components/title"
function App() {
  return (
     <Router>
          <Route exact  path="/"  >
               <Title name="Search" />
               <Search/>
             </Route>
          <Route exact path="/save"  >
          <Title name="Save" />
               <Save/>
             </Route>
     </Router>
  );
}

export default App;
