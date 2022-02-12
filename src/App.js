import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
/*import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/service";
import Feedback from "./pages/feedback";
import Contact from "./pages/contact";
import WhatToExpect from "./pages/wte";*/

      /*<Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/wte" component={WhatToExpect} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>*/
function App (){
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default App;
