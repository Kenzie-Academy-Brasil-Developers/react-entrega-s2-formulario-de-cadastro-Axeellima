import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import Register from "./Components/pages/Register";
import Login from "./Components/pages/Login";
import Dashboard from "./Components/pages/Dashbord";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login history={history} />
        </Route>
        <Route exact path="/register">
          <Register history={history} />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard history={history}></Dashboard>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
