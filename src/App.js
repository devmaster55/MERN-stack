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
          <a href="/show_accounts" className="navbar-brand">
            Landis
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/show_accounts"} className="nav-link">
                Accounts
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/analytical_overview"} className="nav-link">
                Analytics
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/show_accounts"]} component={AccountsPage} />
            <Route exact path="/analytical_overview" component={AnalyticsPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
