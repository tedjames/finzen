import React from 'react'
import { ScrollView, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = {
    transactionContainer: {
      borderRadius: 8,
      borderBottomWidth: 1,
      borderColor: "#eaeff1"
    },
    transactionCard: {
      backgroundColor: "#fff",
      alignSelf: "center",
      alignItems: "center",
      height: 65,
      paddingLeft: 15,
      paddingRight: 15,
      marginBottom: 0,
      flexDirection: "row",
    },
    iconCard: {
      height: 42.5,
      width: 42.5,
      marginRight: 10,
      borderRadius: 100,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "#ddd",
    },
    icon: {
      backgroundColor: "transparent",
      color: "#959595",
      alignSelf: "center"
    },
    transactionData: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 3
    },
    merchant: {
      fontFamily: "Open Sans",
      fontSize: 14.5,
      fontWeight: "400",
      letterSpacing: 0.85,
      color: "#252525",
    },
    time: {
      fontFamily: "Open Sans",
      fontSize: 11,
      fontWeight: "400",
      letterSpacing: 0.75,
      color: "#989898",
    },
    location: {
      fontFamily: "Open Sans",
      fontSize: 11,
      fontWeight: "400",
      letterSpacing: 0.75,
      color: "#989898",
    },
    amountContainer: {
      flexDirection: "row"
    },
    amount: {
      fontFamily: "Open Sans",
      color: "#1ecd8e",
      fontSize: 15,
      alignSelf: "center",
      fontWeight: "400"
    },
    dollarIcon: {
      fontFamily: "Open Sans",
      color: "#1ecd8e",
      fontSize: 12,
      fontWeight: "400",
      alignSelf: "center",
      opacity: 0.75
    },
    negAmount: {
      fontFamily: "Open Sans",
      color: "#f95757",
      fontSize: 15,
      alignSelf: "center",
      fontWeight: "400"
    },
    negDollarIcon: {
      fontFamily: "Open Sans",
      color: "#f95757",
      fontSize: 12,
      fontWeight: "400",
      alignSelf: "center",
      opacity: 0.75
    },
    slash: {
      color: "#989898",
      marginLeft: 3,
      marginRight: 3,
      fontSize: 10,
      marginTop: 1,
      opacity: 0.75
    }
};

const renderDollarSign = (neg) => {
  if (neg) {
    return <Text style={styles.negDollarIcon}>- $</Text>;
  } else {
    return <Text style={styles.dollarIcon}>$</Text>;
  }
}

const Transaction = (props) => {
  return (
    <View style={styles.transactionContainer}>
      <TouchableOpacity style={styles.transactionCard} activeOpacity={0.4}>
        <View style={styles.iconCard}>
          <Icon name={"amazon"} size={19} style={styles.icon}/>
        </View>
        <View style={styles.transactionData}>
          <View>
            <Text style={styles.merchant}>{props.merchant}</Text>
            <View style={{ flexDirection: "row", marginTop: 1 }}>
              <Text style={styles.location}>{props.location}</Text>
              <Text style={styles.slash}>/</Text>
              <Text style={styles.time}>{props.time}</Text>
            </View>

          </View>
          <View style={styles.amountContainer}>
            {renderDollarSign(props.neg)}
            <Text style={props.neg ? styles.negAmount : styles.amount}>{props.amount}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Transaction;
