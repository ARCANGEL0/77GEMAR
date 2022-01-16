import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/77gemar-react.scss?v=1.2.0";
import "assets/demo/demo.css";
import "assets/css/my.css";

import Index from "views/Index.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import Historia from "views/Historia";
import Promessa from "views/Promessa";
import Valores from "views/Valores";
import Ramos from "views/Ramos";
import Contato from "views/Contato";
import Sede from 'views/Sede';
import Diretoria from 'views/Diretoria';
import NavbarMobile from "components/Navbars/navbarMobile";
ReactDOM.render(
  <HashRouter>
    <div className="navbarDesktop">
      <IndexNavbar />
    </div>
    <div style={{ display: "none" }} className="navbarMobile">
      <NavbarMobile />
    </div>
    <Switch>
      <Route exact path="/" render={(props) => <Index {...props} />} />
      <Route
        exact
        path="/Historia"
        render={(props) => <Historia {...props} />}
      />
      <Route path="/Promessa" render={(props) => <Promessa {...props} />} />
      <Route path="/Valores" render={(props) => <Valores {...props} />} />
      <Route path="/Ramos" render={(props) => <Ramos {...props} />} />
      <Route path="/Contato" render={(props) => <Contato {...props} />} />
      <Route path="/Sede" render={(props) => <Sede {...props} />} />
      <Route path="/Diretoria" render={(props) => <Diretoria {...props} />} />

    </Switch>
    <Footer />
  </HashRouter>,
  document.getElementById("root")
);
