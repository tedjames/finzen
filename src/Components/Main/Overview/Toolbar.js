import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Tool from './Tool';

export default class Toolbar extends Component {
  render() {
    return (
      <ScrollView
        style={{ height: 95, marginTop: 35, marginBottom: -10 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <Tool name="Budgets" white />
        <Tool name="Bills" badgeCount={1} />
        <Tool name="Income" white />
        <Tool name="Savings" />
        <Tool name="Net Worth" white badgeCount={21} />
        <View style={{ width: 12 }} />
      </ScrollView>
    );
  }
}
