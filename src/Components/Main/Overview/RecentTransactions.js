import React, { PropTypes } from 'react'
import { View } from 'react-native'
import Transaction from './Transaction'
import { Header } from '../../Common'

const styles = {
  transactionsCard: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: "#fff",
    marginRight: 15,
    marginLeft: 0,
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6
  }
};

const RecentTransactions = (props) => {
  return (
    <View>
      <Header title="TRANSACTIONS" type="rightSection" />
      <View style={styles.transactionsCard}>
        <Transaction merchant="Amazon" amount="500.45" date="Today at 5pm" time="4pm" location="Online" neg/>
        <Transaction merchant="Amazon" amount="500.45" date="Yesterday" time="4pm" location="Online" neg/>
        <Transaction merchant="Amazon" amount="500.45" date="3 Days Ago" time="4pm" location="Online" neg />
        <Transaction merchant="Amazon" amount="500.45" date="1/23/2016" time="4pm" location="Online" />
      </View>
    </View>
  );
};

export default RecentTransactions;
