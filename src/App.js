import React from "react";
import Home from "./components/home/Home";
import { Route, Switch } from "react-router-dom";
import Artist from "./components/artist/Artist";
import Header from "./components/header/Header";
import NotFound from "./components/home/NotFound";
import Music from "./components/music/Music";

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/artist/:artistid" component={Artist} />
          <Route exact path="/music" component={Music} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
};
export default App;
