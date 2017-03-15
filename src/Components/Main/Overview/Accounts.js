import React, { PropTypes } from 'react'
import { View } from 'react-native'
import AccountCard from './AccountCard'
import { Header } from '../../Common'

const styles = {
  accountsCard: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: "#fff",
    marginRight: 0,
    marginLeft: 15,
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  }
};

const Accounts = (props) => {
  return (
    <View>
      <Header title="ACCOUNTS" type="section" type="leftSection" />
      <View style={styles.accountsCard}>
        <AccountCard type="checking" amount="5127" name="Chase Checking"/>
        <AccountCard type="savings" amount="271382" name="Well Fargo Savings"/>
        <AccountCard type="cash" amount="64" name="My Wallet"/>
        <AccountCard type="bitcoin" amount="2.748271" name="Coinbase"/>
      </View>
    </View>

  );
};

export default Accounts;
