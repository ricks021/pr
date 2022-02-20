import React from "react";
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
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
            <Home/>
          </Route>

          <Route path="/name" exact>
            <Name/>
          </Route>

          <Route path="/username" exact>
            <Username/>
          </Route>

          <Route path="/password" exact>
            <Password/>
          </Route>

          <Route path="/address" exact>
            <Address/>
          </Route>

          <Route path="/email" exact>
            <Email/>
          </Route>

          <Route path="/deleteAcc" exact>
            <DeleteAcc/>
          </Route>
        
      </main>
    </Router>
  );
}

export default App;
