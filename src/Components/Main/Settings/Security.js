import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, AlertIOS, Alert } from 'react-native'
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
      buttonText: "DELETE ACCOUNT",
      scrollEnabled: true,
      disableButtons: false,
      disableSwitches: false,
    })
  }

  confirmDelete() {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete your account?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
        {text: 'OK', onPress: this.handleDelete}
      ]);
  }

  handleDelete() {
    console.log("Account Deleted");
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

          </Form>

          <SaveButton text={buttonText} width={275} onPress={this.confirmDelete} loading={loading} offset={100} disableAnimation/>
      </ScrollView>
      </LinearGradient>
    );
  }
}
