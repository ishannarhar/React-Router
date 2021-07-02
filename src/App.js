import { Fragment } from "react";
import React, { Suspense } from "react";
import { Route, Link, Switch } from "react-router-dom";
import AllQuotes from "./All-Quotes";
// import NewQuotes from "./New-Quotes";
import Header from "./Header";
import QuoteDetail from "./Quote-Detail";
const NewQuotes = React.lazy(function () {
  return import("./New-Quotes");
});
export default function App() {
  return (
    <Fragment>
      <Suspense fallback={<p>Loading...</p>}>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact>
              <AllQuotes />
            </Route>
            <Route path="/quotes" exact>
              <AllQuotes />
            </Route>
            <Route path="/newquotes">
              <NewQuotes />
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetail />
            </Route>
          </Switch>
        </main>
      </Suspense>
    </Fragment>
  );
}
