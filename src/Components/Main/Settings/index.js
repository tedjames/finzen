import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import { GradientView } from '../../Common';

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
    paddingTop: 33,
    paddingRight: 15,
    right: 7,
    paddingLeft: 15,
    paddingBottom: 10,
    width: 50,
    height: 50,
    marginBottom: 15,
    alignSelf: 'flex-end'
  },
  icon: {
    transform: [{ rotate: '45deg' }],
    backgroundColor: 'transparent'
  },
  option: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: 28,
    color: 'white',
    opacity: 0.95,
    letterSpacing: 1.8,
    backgroundColor: 'transparent',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    alignSelf: 'center',
    marginTop: 34,
    backgroundColor: 'transparent'
  },
  footer: {
    backgroundColor: '#111',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    height: 60,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    letterSpacing: 6,
    backgroundColor: 'transparent',
    color: '#eee',
  },
  footerIcon: {
    top: 0
  }
};

export default class Settings extends Component {
  render() {
    return (
      <GradientView
        start={{ x: 0.0, y: 0.7 }}
        end={{ x: 0.5, y: 1.0 }}
        colors={['#AC70FB', '#9197F8', '#77BDF5']}
      >
        <View>

          <TouchableOpacity style={styles.iconContainer} onPress={() => Actions.pop()}>
            <Icon name="plus" size={19} style={styles.icon} color="#fff" />
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={() => Actions.widgets()}
          >
            <Text style={styles.option}>Widgets</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={() => Actions.notifications()}
          >
            <Text style={styles.option}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={() => Actions.profile()}
          >
            <Text style={styles.option}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={() => Actions.security()}
          >
            <Text style={styles.option}>Security</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={() => Actions.support()}
          >
            <Text style={styles.option}>Support</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={() => Actions.auth()}
          >
            <Text style={styles.option}>Logout</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.footer} activeOpacity={0.9} onPress={() => Actions.pop()} >
          <Text style={styles.footerText}>SETTINGS</Text>
          <Icon2 name="chevron-down" size={21} style={styles.footerIcon} color="#eee" />
        </TouchableOpacity>

      </GradientView>
    );
  }
}

/*
// MAY 2nd BACKUP - Before the big change...

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
      <GradientView
        start={{ x: 0.0, y: 0.7 }}
        end={{ x: 0.5, y: 1.0 }}
        colors={['#AC70FB', '#9197F8', '#77BDF5']}
      >
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

*/
