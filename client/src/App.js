import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Registration from './Components/Registration';
import Login from './Components/Login';

function App() {
  return (
    <>

      <Navbar />

      <Route exact path="/">
        <Home />
      </Route>


      <Route exact path="/registration">
        <Registration />
      </Route>


      <Route exact path="/login">
        <Login />
      </Route>

    </>
  );
}

export default App;
