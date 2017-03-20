import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from "react-native-vector-icons/Ionicons"
import { Actions } from 'react-native-router-flux'
import { ActionForm, Form, FormField, BackButton, SaveButton } from '../../Common'
import Header from './Header'
import * as Animatable from 'react-native-animatable'


export default class Support extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);

    this.state = ({
      buttonText: "SUBMIT",
      disableButtons: false,
      loading: false,
      success: false,
      fail: false
    })
  }

  handleSave() {
    // TODO: DISABLE THE MAIN SCROLLVIEW HERE
    this.setState({ buttonText: "SUBMITTING", disableButtons: true, loading: true })
    // Insert API calls here
    setTimeout(() => {
      this.setState({ success: true })
    }, 3000);
  }

  render() {
    const { loading, disableButtons, buttonText, success, fail } = this.state;

    return (
      <LinearGradient colors={['#fff', '#f5f5f8']} style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <BackButton loading={loading} />
            <Header text="SUPPORT" loading={loading} />
          </View>

          <Form height={450} loading={loading}>
            <ActionForm disabled={disableButtons} label="Problem Type" value="" placeholder="Please choose one..." dropdown/>
            <FormField disabled={disableButtons} label="Description" value="" placeholder="Doe" />
          </Form>

          <SaveButton width={250} text={buttonText} onPress={this.handleSave} loading={loading} disabled={disableButtons} success={success} fail={fail} />

        </ScrollView>
      </LinearGradient>
    );
  }
}
