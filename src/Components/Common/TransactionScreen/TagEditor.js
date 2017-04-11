import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Form, FormTag, BackButton, SaveButton, GradientView } from '../../Common';
import Header from './Header';

export default class TagEditor extends Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);

    this.state = ({
      buttonText: 'SAVE CHANGES',
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
    const { loading, disableButtons, buttonText } = this.state;

    return (
      <GradientView colors={['#fff', '#f5f5f8']}>
        <ScrollView scrollEnabled={this.state.scrollEnabled}>
          <View>
            <BackButton loading={loading} />
            <Header text="EDIT TAGS" loading={loading} />
          </View>

          <Form loading={loading}>
            <FormTag label="Food" color="#4ab8ff" />
            <FormTag label="Eating out" color="#584aff" />
            <FormTag label="Pizza" color="#ff4a60" disableDivider />
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
