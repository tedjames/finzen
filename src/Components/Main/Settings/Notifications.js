import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import LinearGradient from 'react-native-linear-gradient';
/* eslint-enable import/no-unresolved */
/* eslint-enable import/extensions */import { Form, FormSwitch, BackButton, SaveButton } from '../../Common';
import Header from './Header';

export default class Notifications extends Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);

    this.state = ({
      buttonText: 'DISABLE NOTIFICATIONS',
      scrollEnabled: true,
      disableButtons: false,
      disableSwitches: false,
      loading: false,
      success: false,
      fail: false
    });
  }

  handleToggle() {
    // TODO: Insert API calls here
    const enable = 'ENABLE NOTIFICATIONS';
    const disable = 'DISABLE NOTIFICATIONS';
    const { buttonText, disableSwitches } = this.state;
    this.setState({
      buttonText: buttonText === enable ? disable : enable,
      disableSwitches: !disableSwitches
    });
  }

  render() {
    const { loading, disableButtons, disableSwitches, buttonText } = this.state;

    return (
      <LinearGradient colors={['#fff', '#f5f5f8']} style={{ flex: 1 }}>
        <ScrollView scrollEnabled={this.state.scrollEnabled}>
          <View>
            <BackButton loading={loading} />
            <Header text="NOTIFICATIONS" loading={loading} />
          </View>

          <Form loading={loading}>
            <FormSwitch disabled={disableSwitches} label="New Expenses" />
            <FormSwitch disabled={disableSwitches} label="New Deposits" />
            <FormSwitch disabled={disableSwitches} label="Upcoming Bills" />
            <FormSwitch disabled={disableSwitches} label="Budget Reminders" />
            <FormSwitch disabled={disableSwitches} label="Safe Spending" disableDivider />
          </Form>

          <SaveButton
            text={buttonText}
            width={300}
            onPress={this.handleToggle}
            loading={loading}
            disabled={disableButtons}
            offset={100}
            disableAnimation
          />
        </ScrollView>
      </LinearGradient>
    );
  }
}
