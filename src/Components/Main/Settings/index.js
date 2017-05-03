import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Octicons';
import { GradientView, SaveButton } from '../../Common';
import SettingsCard from './SettingsCard';
import MainHeader from './MainHeader';
import Footer from './Footer';

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
    letterSpacing: 4,
    color: '#99a2ab',
    backgroundColor: 'transparent',
    fontWeight: '500',
    marginTop: 32,
    marginBottom: 15,
    alignSelf: 'center'
  },
  iconContainer: {
    paddingTop: 35,
    paddingRight: 15,
    right: 10,
    paddingLeft: 15,
    paddingBottom: 10,
    width: 50,
    height: 50,
    alignSelf: 'flex-end'
  },
  icon: {
    transform: [{ rotate: '45deg' }],
    backgroundColor: 'transparent'
  },
};

export default class Settings extends Component {
  render() {
    return (
      <GradientView colors={['#eee', '#eee']}>
        <ScrollView>

          <TouchableOpacity style={styles.iconContainer} onPress={() => Actions.pop()}>
            <Icon name="plus" size={17} style={styles.icon} color="#777" />
          </TouchableOpacity>

          <Text style={styles.sectionHeader}>PREFERENCES</Text>
          <SettingsCard title="Widgets" type="widgets" handlePress={() => Actions.widgets()} />
          <SettingsCard title="Notifications" type="notifications" handlePress={() => Actions.notif()} />

          <Text style={styles.sectionHeader}>ACCOUNT</Text>
          <SettingsCard title="Edit Profile" type="account" handlePress={() => Actions.userAct()} />
          <SettingsCard title="Security" type="security" handlePress={() => Actions.sec()} />
          <SettingsCard title="Support" type="support" handlePress={() => Actions.sup()} />
          <SettingsCard title="Logout" handlePress={() => Actions.sup()} />

        </ScrollView>
        <Footer />
      </GradientView>
    );
  }
}
