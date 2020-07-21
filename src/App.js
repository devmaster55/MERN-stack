import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AccountsPage from "./pages/accounts.page";
import AnalyticsPage from "./pages/analytics.page";

function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
          <a href="/showAccounts" class="navbar-brand">
            Landis
          </a>
          <div class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to={"/showAccounts"} class="nav-link">
                Accounts
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/analyticalOverview"} class="nav-link">
                Analytics
              </Link>
            </li>
          </div>
        </nav>

        <div class="container mt-3">
          <Switch>
            <Route exact path={["/", "/showAccounts"]} component={AccountsPage} />
            <Route exact path="/analyticalOverview" component={AnalyticsPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
