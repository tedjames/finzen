import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { GradientView } from '../../Common';
import SettingsCard from './SettingsCard';
import MainHeader from './MainHeader';
import SettingsCardAlt from './SettingsCardAlt';

const styles = {
  height: {
    height: 60,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 8
  },
  sectionHeader: {
    fontFamily: 'Montserrat',
    fontSize: 11,
    letterSpacing: 1.8,
    color: '#99a2ab',
    backgroundColor: 'transparent',
    fontWeight: '500',
    marginLeft: 40,
    marginTop: 30,
    marginBottom: 20
  }
};

export default class Settings extends Component {
  render() {
    return (
      <GradientView colors={['#eee', '#eee']}>
        <MainHeader />
        <ScrollView>

          <Text style={styles.sectionHeader}>GENERAL</Text>
          <SettingsCardAlt title="Profile" type="account" handlePress={() => Actions.userAct()} />
          <SettingsCardAlt title="Widgets" type="preferences" handlePress={() => Actions.widgets()} />
          <SettingsCardAlt title="Notifications" type="notifications" handlePress={() => Actions.notif()} />

          <Text style={styles.sectionHeader}>SECURITY</Text>
          <SettingsCardAlt title="Change Password" type="account" handlePress={() => Actions.sec()} />
          <SettingsCardAlt title="Passcode and Touch ID" type="account" handlePress={() => Actions.sec()} />

          <Text style={styles.sectionHeader}>CONTACT</Text>
          <SettingsCardAlt title="Support" type="support" handlePress={() => Actions.sup()} />
          <SettingsCardAlt title="Feedback" type="feedback" handlePress={() => Actions.feed()} />
          <SettingsCardAlt title="Logout" type="logout" handlePress={() => Actions.auth()} />

        </ScrollView>
      </GradientView>
    );
  }
}
