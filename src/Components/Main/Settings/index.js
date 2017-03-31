import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { GradientView } from '../../Common';
import SettingsCard from './SettingsCard';

const headerText = {
  fontFamily: 'Montserrat',
  fontSize: 13,
  fontWeight: '500',
  color: '#333333',
  letterSpacing: 4,
  backgroundColor: 'transparent',
  opacity: 0.70,
  alignSelf: 'center',
  marginTop: 28,
  marginBottom: 25
};

const row = {
  flex: 1,
  flexDirection: 'row'
};

export default class Settings extends Component {
  render() {
    return (
      <GradientView>
        <ScrollView>
          <Text style={headerText}>SETTINGS</Text>
          <View style={row}>
            <SettingsCard title="Account" subtitle="Ted Werbel" type="account" handlePress={() => Actions.userAct()} left />
          </View>
          <View style={row}>
            <SettingsCard title="Notifications" subtitle="Enabled" type="notifications" handlePress={() => Actions.notif()} left />
            <SettingsCard title="Widgets" subtitle="Enabled" type="preferences" handlePress={() => Actions.widgets()} />
          </View>
          <View style={row}>
            <SettingsCard title="Security" type="security" subtitle="Medium" handlePress={() => Actions.sec()} left />
            <SettingsCard title="Support" type="support" subtitle="Need help?" handlePress={() => Actions.sup()} />
          </View>
          <View style={row}>
            <SettingsCard title="Feedback" type="feedback" subtitle="Let's talk!" handlePress={() => Actions.feed()} left />
            <SettingsCard title="Logout" type="logout" handlePress={() => Actions.auth()} />
          </View>
        </ScrollView>
      </GradientView>
    );
  }
}
