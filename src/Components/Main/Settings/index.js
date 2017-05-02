import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Octicons';
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
  },
  iconContainer: {
    paddingTop: 30,
    paddingRight: 25,
    paddingBottom: 10,
    marginBottom: -25
  },
  icon: {
    transform: [{ rotate: '45deg' }],
    backgroundColor: 'transparent',
    alignSelf: 'flex-end'
  }
};

export default class Settings extends Component {
  render() {
    return (
      <GradientView colors={['#eee', '#eee']}>
        <ScrollView>

          <TouchableOpacity style={styles.iconContainer} onPress={() => Actions.pop()}>
            <Icon name="plus" size={17} style={styles.icon} color="#777" />
          </TouchableOpacity>

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
