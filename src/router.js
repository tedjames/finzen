import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainRouter from './Components/Main/mainRouter';
import TransactionScreen from './Components/Common/TransactionScreen';
import AccountScreen from './Components/Main/Overview/AccountScreen';
import UserAccount from './Components/Main/Settings/UserAccount';
import Notifications from './Components/Main/Settings/Notifications';
import Widgets from './Components/Main/Settings/Widgets';
import Security from './Components/Main/Settings/Security';
import Support from './Components/Main/Settings/Support';
import Feedback from './Components/Main/Settings/Feedback';
import TagEditor from './Components/Common/TransactionScreen/TagEditor';
import Auth from './Components/Auth';
import Settings from './Components/Main/Settings';

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="main" hideNavBar>
          <Scene key="auth" component={Auth} />
          <Scene key="settings" component={Settings} direction="vertical" />
          <Scene key="app" component={MainRouter} initial />
          <Scene key="tx" component={TransactionScreen} />
          <Scene key="account" component={AccountScreen} />
          <Scene key="profile" component={UserAccount} />
          <Scene key="notifications" component={Notifications} />
          <Scene key="widgets" component={Widgets} />
          <Scene key="security" component={Security} />
          <Scene key="support" component={Support} />
          <Scene key="feedback" component={Feedback} />
          <Scene key="tags" component={TagEditor} />
        </Scene>

      </Router>
    );
  }
}

// CHANGE INITIAL TO THE FIRST SCENE TO ENABLE AUTHENTICATION
