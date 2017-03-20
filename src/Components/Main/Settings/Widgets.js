import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ActionForm, Form, FormField, FormSwitch, FormLabel, FormButton, BackButton, SaveButton } from '../../Common'
import Header from './Header'

export default class Widgets extends Component {
  render() {
    return (
      <LinearGradient colors={['#fff', '#f5f5f8']} style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <BackButton />
            <Header text="WIDGETS" />
          </View>

          <Form height={615} disablePadding>
            <FormLabel text="General" />
            <FormSwitch label="Show Available Balance" disableDivider/>
            <FormSwitch label="Show Current Balance" disableDivider/>
            <FormSwitch label="Safe Spending" disableDivider/>
            <FormSwitch label="Upcoming Bills" disableDivider/>
            <FormSwitch label="Safe Spending" disableDivider/>
            <FormLabel text="Accounts" />
            <FormSwitch label="Wells Fargo Checking" disableDivider/>
            <FormSwitch label="Chase Savings" disableDivider/>
            <FormSwitch label="My Wallet" disableDivider/>
          </Form>
        </ScrollView>
      </LinearGradient>
    );
  }
}
