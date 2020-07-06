import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingPage, SignUp, Login, Game } from "./pages/index";
import StepOne from "./components/story/step_one";
import StepTwo from "./components/story/step_two";
import Story from "./pages/Story";
import Features from "./pages/Features";

const App: React.SFC<{}> = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/intro/1" component={StepOne} />
        <Route exact path="/intro/2" component={StepTwo} />
        <Route path="/play-now" component={Game} />
      </div>
    </Router>
  );
};

export default App;
