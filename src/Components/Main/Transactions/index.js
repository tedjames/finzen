import React from 'react';
import { View } from 'react-native';
import TransactionsList from './TransactionsList';
import Header from './Header';

const Transactions = () => {
  return (
    <View>
      <Header onSearchPress={undefined} onFilterPress={undefined} />
      <TransactionsList />
    </View>
  );
};

export default Transactions;
