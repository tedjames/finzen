import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import MainRouter from './Components/Main/mainRouter';
import TransactionScreen from './Components/Common/TransactionScreen'
import AccountScreen from './Components/Main/Overview/AccountScreen'
import UserAccount from './Components/Main/Settings/UserAccount'
import Notifications from './Components/Main/Settings/Notifications'
import Widgets from './Components/Main/Settings/Widgets'
import Security from './Components/Main/Settings/Security'
import Support from './Components/Main/Settings/Support'
import Feedback from './Components/Main/Settings/Feedback'

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="main" hideNavBar initial>
          <Scene key="app" component={MainRouter} initial />
          <Scene key="tx" component={TransactionScreen} />
          <Scene key="act" component={AccountScreen} />
          <Scene key="userAct" component={UserAccount} />
          <Scene key="notif" component={Notifications} />
          <Scene key="widgets" component={Widgets} />
          <Scene key="sec" component={Security} />
          <Scene key="sup" component={Support} />
          <Scene key="feed" component={Feedback} />
        </Scene>

      </Router>
    );
  }
}

// CHANGE INITIAL TO THE FIRST SCENE TO ENABLE AUTHENTICATION
