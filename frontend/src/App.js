import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Doctor from './components/Register/Doctor'
import Patient from './components/Register/Patient'
import Login from './components/Login/Login'
function App() {
  return (
    <div className="App">
        <main> 
        <Router>
     
            <Switch>

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
