import Login from "./components/login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}>
          </Route>
          <Route exact path='Home' element={<><Header /> <Home/> </>} />
        </Routes>   
      </Router>

    </div>
  );
}

export default App;
