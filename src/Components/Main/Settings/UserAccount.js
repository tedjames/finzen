import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import LinearGradient from 'react-native-linear-gradient';
/* eslint-enable import/no-unresolved */
/* eslint-enable import/extensions */
import { Form, FormField, BackButton, SaveButton } from '../../Common';
import Header from './Header';

export default class UserAccount extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);

    this.state = ({
      buttonText: 'SAVE CHANGES',
      disableButtons: false,
      loading: false,
      success: false,
      fail: false
    });
  }

  handleSave() {
    // TODO: DISABLE THE MAIN SCROLLVIEW HERE
    this.setState({ buttonText: 'SAVING CHANGES', disableButtons: true, loading: true });
    // Insert API calls here
    setTimeout(() => {
      this.setState({ success: true });
    }, 3000);
  }

  render() {
    const { loading, disableButtons, buttonText, success, fail } = this.state;

    return (
      <LinearGradient colors={['#fff', '#f5f5f8']} style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <BackButton loading={loading} />
            <Header text="ACCOUNT" loading={loading} />
          </View>

          <Form height={450} loading={loading}>
            <FormField disabled={disableButtons} label="First Name" value="Ted" placeholder="John" />
            <FormField disabled={disableButtons} label="Last Name" value="Werbel" placeholder="Doe" />
            <FormField disabled={disableButtons} label="Email" value="werbel.ted@gmail.com" placeholder="your@email.com" />
            <FormField disabled={disableButtons} label="Phone Number" value="7322775096" placeholder="123-456-7890" type="phone" />
          </Form>

          <SaveButton
            width={250}
            text={buttonText}
            onPress={this.handleSave}
            loading={loading}
            disabled={disableButtons}
            success={success}
            fail={fail}
          />
        </ScrollView>
      </LinearGradient>
    );
  }
}
