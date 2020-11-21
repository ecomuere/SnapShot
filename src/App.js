import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <PhotoContextProvider>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/mountain" />}
              />

              <Route exact path="/:searchTerm">
                <Item />
              </Route>

              <Route exact path="/search/:searchTerm">
                <Search />
              </Route>

              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
