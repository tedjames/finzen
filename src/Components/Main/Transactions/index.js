import React from 'react';
import { View } from 'react-native';
import TransactionsList from './TransactionsList';
import Header from './Header';
import { GradientView } from '../../Common';

const Transactions = () => {
  return (
    <View style={{ backgroundColor: '#eee' }}>
      <Header onSearchPress={undefined} onFilterPress={undefined} />
      <TransactionsList />
    </View>
  );
};

export default Transactions;
