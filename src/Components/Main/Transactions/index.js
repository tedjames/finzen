import React from 'react'
import { View } from 'react-native'
import { GradientView } from '../../Common'
import Header from './Header'
import Search from './Search'
import TransactionsList from './TransactionsList'

const Transactions = (props) => {
  return (
    <GradientView>
        <Header />
        <View>
          <Search />
          <TransactionsList />
        </View>

    </GradientView>
  );
};

export default Transactions;
