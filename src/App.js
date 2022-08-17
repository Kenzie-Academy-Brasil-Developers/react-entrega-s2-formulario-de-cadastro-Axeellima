import "./App.css";
import { Switch, Route } from "react-router-dom";
import Register from "./Components/pages/Register";
import Login from "./Components/pages/Login";
import Dashboard from "./Components/pages/Dashbord";
import UserProvider from "./contexts/";
import TechProvider from "./contexts/TechContext";

function App() {
  return (
    <UserProvider>
      <TechProvider>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </TechProvider>
    </UserProvider>
  );
}

export default App;
