import "./App.css";
import { Switch, Route } from "react-router-dom";
import Register from "./Components/pages/Register";
import Login from "./Components/pages/Login";
import Dashboard from "./Components/pages/Dashbord";
import UserProvider from "./contexts/";

function App() {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;
