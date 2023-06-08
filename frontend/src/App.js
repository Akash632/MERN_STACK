import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route element={<PrivateComponent/>}>

        <Route exact path="/" element={<h1>Products Component</h1>}/>
        <Route exact path="/add" element={<h1>Add Component</h1>}/>
        <Route exact path="/update" element={<h1>Update Component</h1>}/>
        <Route exact path="/logout" element={<h1>Logout Component</h1>}/>
        <Route exact path="/profile" element={<h1>Profile Component</h1>}/>
        </Route>
        <Route exact path ="/signup" element = {<Signup/>}/>
        <Route exact path="/Login" element = {<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
