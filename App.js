import HomePage from "./pages/HomePage/HomePage";
import Guide from "./pages/Guide/GuideBody"
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';


function App() {
    return (
      <Router> 
        //hello---asdasd zzzz
        //asdasdasd
        <div className="App">
          <Route path="/" component = {HomePage} exact />  
          <Route path="/guide" component = {Guide} exact />     
        </div>
      </Router>
    )
}

export default App;
