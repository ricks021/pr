import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Name from './Name/Name';
import Username from "./Username/Username";
import Password from "./Password/Password";
import Address from "./Address/Address";
import Email from "./Email/Email";
import DeleteAcc from "./Delete/DeleteAcc";

const App = () =>{
  return(
    <Router>
      <main>
        
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/Name" exact>
          <Name />
        </Route>

        <Route path="/Username" exact>
          <Username />
        </Route>

        <Route path="/Password" exact>
          <Password />
        </Route>

        <Route path="/Address" exact>
          <Address />
        </Route>

        <Route path="/Email" exact>
          <Email />
        </Route>

        <Route path="/DeleteAcc" exact>
          <DeleteAcc />
        </Route>

      </main>
    </Router>
  );
}

export default App;
