import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import LinearGradient from 'react-native-linear-gradient';
/* eslint-enable import/no-unresolved */
/* eslint-enable import/extensions */
import { Form, FormSwitch, FormLabel, BackButton } from '../../Common';
import Header from './Header';

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
            <FormSwitch label="Available Balance" disableDivider />
            <FormSwitch label="Current Balance" disableDivider />
            <FormSwitch label="Flex Spending" disableDivider />
            <FormSwitch label="Upcoming Bills" disableDivider />
            <FormLabel text="Accounts" />
            <FormSwitch label="Wells Fargo Checking" disableDivider />
            <FormSwitch label="Chase Savings" disableDivider />
            <FormSwitch label="My Wallet" disableDivider />
          </Form>
        </ScrollView>
      </LinearGradient>
    );
  }
}
