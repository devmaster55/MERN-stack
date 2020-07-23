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
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/showAccounts" className="navbar-brand">
            Landis
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/showAccounts"} className="nav-link">
                Accounts
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/analyticalOverview"} className="nav-link">
                Analytics
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
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
