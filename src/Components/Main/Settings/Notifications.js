import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from "react-native-vector-icons/Ionicons"
import { Actions } from 'react-native-router-flux'
import { ActionForm, Form, FormField, FormSwitch, FormLabel, BackButton, SaveButton } from '../../Common'
import Header from './Header'
import * as Animatable from 'react-native-animatable'



export default class Notifications extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);

    this.state = ({
      buttonText: "DISABLE NOTIFICATIONS",
      disableButtons: false,
      loading: false,
      success: false,
      fail: false
    })
  }

  handleSave() {
    // TODO: DISABLE THE MAIN SCROLLVIEW HERE
    this.setState({ buttonText: "DISABLING NOTIFICATIONS", disableButtons: true, loading: true })
    // Insert API calls here
    setTimeout(() => {
      this.setState({ success: true })
    }, 3000);
  }

  render() {
    const { loading, disableButtons, buttonText, success, fail } = this.state;

    return (
      <LinearGradient colors={['#fff', '#f5f5f8']} style={{ flex: 1 }}>
        <ScrollView scrollEnabled={false}>
          <View>
            <BackButton loading={loading} />
            <Header text="NOTIFICATIONS" loading={loading} />
          </View>

          <Form loading={loading} switchForm>
            <ScrollView>
              <View style={{ height: 50 }} />
              <FormSwitch label="New Expenses" />
              <FormSwitch label="New Deposits" />
              <FormSwitch label="Upcoming Bills" />
              <FormSwitch label="Budget Reminders" />
              <FormSwitch label="Safe Spending" />
              <View style={{ height: 20 }} />
            </ScrollView>
          </Form>

          <SaveButton text={buttonText} width={300} onPress={this.handleSave} loading={loading} disabled={disableButtons} success={success} fail={fail} offset={100}/>

        </ScrollView>
      </LinearGradient>
    );
  }
}
