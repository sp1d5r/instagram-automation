import React from "react";
import './App.css';
import {NavigationBar} from "./components/NavigationBar";
import {Container} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Dashboard} from "./components/dashboard/Dashboard";
import {SideBar} from "./components/sidebar/SideBar";

function App() {
  return (
    <Router style={{width: "100%", height: 2000}}>
      <NavigationBar username={"ElijahAhmad__"} userSelected={true}/>
      <SideBar/>
      <Container>
          <Switch>
              <Route path={'/'}>
                  <Dashboard />
              </Route>
          </Switch>
      </Container>
    </Router>
  );
}

export default App;
