import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Form, FormSwitch, FormTag, BackButton, SaveButton, GradientView } from '../../Common';
import Header from './Header';

export default class TagEditor extends Component {
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
      <GradientView colors={['#fff', '#f5f5f8']}>
        <ScrollView scrollEnabled={this.state.scrollEnabled}>
          <View>
            <BackButton loading={loading} />
            <Header text="NOTIFICATIONS" loading={loading} />
          </View>

          <Form loading={loading}>
            <FormTag label="Meh" />
            <FormTag label="Meh" />
            <FormTag label="Meh" />
            <FormSwitch disabled={disableSwitches} label="New Expenses" />
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
      </GradientView>
    );
  }
}
