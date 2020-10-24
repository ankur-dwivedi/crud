import React from 'react';
import Form from "./components/Form";
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App(props) {
  return(
  <Router>
    <div>
      <main>
      
        <Switch>
        <Route exact path="/" render={props =><div><Home key={"home"} {...props}/></div>}></Route>
        <Route exact path="/add" render={props =><Form key={"add"} {...props}/>}></Route>
        <Route  path="/update/" render={props =><Form key={"update"} {...props}/>}></Route>
        </Switch>
      </main>
    </div>
    
  </Router>
  );
}


export default App;
