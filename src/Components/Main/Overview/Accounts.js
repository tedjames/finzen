import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import AccountCard from './AccountCard'
import { Header } from '../../Common'

const styles = {
  accountsCard: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#fff',
    marginRight: 0,
    marginLeft: 15,
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },
  text: {
    fontFamily: 'Open Sans',
    fontSize: 20,
    letterSpacing: 0.3,
    backgroundColor: 'transparent',
    color: '#333', // #999cac is a nice color for stuff that's usually white! (blue/white) OR #a8aaba
    fontWeight: '300',
    marginLeft: 30,
    marginTop: 22,
    marginBottom: 12
  },
};

const Accounts = (props) => {
  return (
    <View>
      <Text style={styles.text}>Accounts</Text>
      <View style={styles.accountsCard}>
        <AccountCard type="checking" amount="5127" name="Chase Checking" />
        <AccountCard type="savings" amount="271382" name="Well Fargo Savings" />
        <AccountCard type="cash" amount="64" name="My Wallet" />
        <AccountCard type="bitcoin" amount="2.748271" name="Coinbase" />
      </View>
    </View>

  );
};

export default Accounts;
