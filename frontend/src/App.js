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
import {Home} from "./components/home/Home";
import {PageWrap} from "./components/pagewrap/PageWrap";

function App() {
  return (
    <Router style={{width: "100%", height: 2000}}>
      <NavigationBar username={"ElijahAhmad__"} userSelected={true}/>
      <SideBar/>
          <PageWrap style={{backgroundColor: "red"}}>
              <Switch>
                  <Route path={'/dashboard/'}>
                      <Dashboard />
                  </Route>
                  <Route path={'/'}>
                      <Home />
                  </Route>
              </Switch>
          </PageWrap>
    </Router>
  );
}

export default App;
