import React, { } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { datadogRum } from '@datadog/browser-rum';
import keys from "./keys";

import Home from "../src/pages/Home/Home";

datadogRum.init({
  applicationId: keys.datadog.app_key_rum,
  clientToken: keys.datadog.client_token_rum,
  site: keys.datadog.dd_site,
  service:'javascript-popups',
  
  // Specify a version number to identify the deployed version of your application in Datadog 
  // version: '1.0.0',
  sampleRate: 100,
  premiumSampleRate: 100,
  trackInteractions: true,
  defaultPrivacyLevel:'mask-user-input'
});
  
datadogRum.startSessionReplayRecording();

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
