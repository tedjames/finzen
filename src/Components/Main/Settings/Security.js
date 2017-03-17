import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from "react-native-vector-icons/Ionicons"
import { Actions } from 'react-native-router-flux'
import { ActionForm, Form, FormField, FormSwitch, FormLabel, FormButton, BackButton, SaveButton } from '../../Common'
import Header from './Header'
import * as Animatable from 'react-native-animatable'

export default class Security extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      buttonText: "MEDIUM",
      scrollEnabled: true,
      disableButtons: false,
      disableSwitches: false,
    })
  }

  render() {
    const { loading, disableButtons, disableSwitches, buttonText } = this.state;

    return (
      <LinearGradient colors={['#fff', '#f5f5f8']} style={{ flex: 1 }}>
        <ScrollView scrollEnabled={this.state.scrollEnabled}>
          <View>
            <BackButton loading={loading} />
            <Header text="SECURITY" loading={loading} />
          </View>

          <Form loading={loading} height={340}>
            <FormButton disabled={disableSwitches} label="Change Password" />
            <FormButton disabled={disableSwitches} label="Passcode and Touch ID" />
            <FormButton disabled={disableSwitches} label="Security Questions" bottom />
            <FormButton disabled={disableSwitches} label="Delete Account" offset={50} centered danger bottom />
          </Form>

          <SaveButton text={buttonText} width={275} onPress={this.handleToggle} loading={loading} disabled={true} offset={100} disableAnimation/>
        </ScrollView>
      </LinearGradient>
    );
  }
}
