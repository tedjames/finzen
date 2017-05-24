import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Tool from './Tool';

export default class Toolbar extends Component {
  render() {
    return (
      <ScrollView
        style={{ height: 95, marginTop: 30 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <Tool name="Budgets" white />
        <Tool name="Bills" />
        <Tool name="Income" white />
        <Tool name="Savings" />
        <Tool name="Net Worth" white />
        <View style={{ width: 12 }} />
      </ScrollView>
    );
  }
}
