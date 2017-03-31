import React, { Component } from 'react';
import { View, ScrollView, Alert } from 'react-native';
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import LinearGradient from 'react-native-linear-gradient';
/* eslint-enable import/no-unresolved */
/* eslint-enable import/extensions */
import { Form, FormButton, BackButton, SaveButton } from '../../Common';
import Header from './Header';

export default class Security extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      buttonText: 'DELETE ACCOUNT',
      scrollEnabled: true,
      disableButtons: false,
      disableSwitches: false,
    });
  }

  confirmDelete() {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete your account?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
        { text: 'OK', onPress: () => console.log('Account Deleted') }
      ]);
  }

  render() {
    const { loading, disableSwitches, buttonText } = this.state;

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

          <SaveButton
            text={buttonText}
            width={275}
            onPress={this.confirmDelete}
            loading={loading}
            offset={100}
            disableAnimation
          />
        </ScrollView>
      </LinearGradient>
    );
  }
}
