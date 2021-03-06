import React from "react";
import {
  BrowserRouter as Router,
  Switch,
	Route
} from "react-router-dom";
import { Form } from '../Form';
import { CommitList } from '../CommitList';
import './App.scss';

export interface Props {};

export const App: React.FC<Props & { children?: React.ReactNode }> = () => {
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/commit-list/:foo" component={CommitList} />
        </Switch>
      </div>
    </Router>
  );
}
