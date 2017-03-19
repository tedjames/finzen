import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { GradientView, Header } from '../../Common'
import SettingsCard from './SettingsCard'
import { Actions } from 'react-native-router-flux'

const headerText = {
    fontFamily: "Montserrat",
    fontSize: 13,
    fontWeight: "500",
    color: "#333333",
    letterSpacing: 4,
    backgroundColor: "transparent",
    opacity: 0.70,
    alignSelf: "center",
    marginTop: 28,
    marginBottom: 25
}

const row = {
  flex: 1,
  flexDirection: "row"
};

export default class Settings extends Component {
  // Press handlers for navigating to sub-scenes within settings
  handleAccount() {
    Actions.userAct();
  }
  handleNotifications() {
    Actions.notif();
  }
  handlePreferences() {
    Actions.widgets();
  }
  handleSecurity() {
    Actions.sec();
  }
  handleSupport() {
    Actions.sup();
  }
  handleFeedbaack() {
    Actions.feed();
  }
  handleLogout() {
    Actions.auth();
  }

  render() {
    return (
      <GradientView>
        <ScrollView>
          <Text style={headerText}>SETTINGS</Text>
          <View style={row}>
            <SettingsCard title="Account" subtitle="Ted Werbel" type="account" handlePress={this.handleAccount} left/>
          </View>
          <View style={row}>
            <SettingsCard title="Notifications" subtitle="Enabled" type="notifications" handlePress={this.handleNotifications} left/>
            <SettingsCard title="Widgets" subtitle="Enabled" type="preferences" handlePress={this.handlePreferences} />
          </View>
          <View style={row}>
            <SettingsCard title="Security" type="security" subtitle="Medium" handlePress={this.handleSecurity} left />
            <SettingsCard title="Support" type="support" subtitle="Need help?" handlePress={this.handleSupport} />
          </View>
          <View style={row}>
            <SettingsCard title="Feedback" type="feedback" subtitle="Let's talk!" handlePress={this.handleFeedbaack} left />
            <SettingsCard title="Logout" type="logout" handlePress={this.handlePress} />
          </View>
        </ScrollView>
      </GradientView>
    );
  }
}
