import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Doctor from './components/Register/Doctor'
import Patient from './components/Register/Patient'
import Login from './components/Login/Login'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
        <main> 
        <Router>
            <Navbar/>
            <Switch>
                  <Route path='/' component={Home} exact/>
                  <Route path='/login' component={()=><Login />}exact/>
                  <Route path='/doctor-signup' component={()=><Doctor/>} exact/>
                  <Route path='/patient-signup/' component={()=><Patient/>} exact/>
            </Switch>
          </Router>

        </main>
    </div>
  );
}

export default App;
