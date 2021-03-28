import React, {Component} from 'react';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import Moment from "moment";
// @ts-ignore
import momentLocalizer from "react-widgets-moment";
import 'react-widgets/dist/css/react-widgets.css'
import Navigation from "./shared/Navigation";
import Content from "./shared/Content";
import Copyright from "./shared/Copyright";

library.add(fab, far, fas);
Moment.locale("de");
momentLocalizer();

class App extends Component {
  render() {
      return (
        <div className="main-app">
            <header className="main-navigation">
                <Navigation />
            </header>
            <Content/>
            <Copyright/>
        </div>
      );
  }
}

export default App;
