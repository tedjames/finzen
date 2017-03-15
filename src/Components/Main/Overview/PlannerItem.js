import React from 'react'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback as Touchable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = {
  plannerCard: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: "#fff",
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 40,
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 2
  },
  plannerItem: {
    height: 55,
    flex: 1,
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  plannerTitle: {
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.85,
    color: "#717171",
  },
  plannerHeaderIcon: {
    marginRight: 15,
    color: "#bbb"
  },
  downArrowIcon: {
    alignSelf: "flex-end",
  },
  plannerHeaderText: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
};

const PlannerItem = (props) => {
  return (
    <TouchableOpacity style={styles.plannerItem} activeOpacity={0.4}>
      <Icon name={"calendar-check-o"} style={styles.plannerHeaderIcon} size={18} />
      <View style={styles.plannerHeaderText}>
        <Text style={styles.plannerTitle}>{props.name}</Text>
        <Icon name={"angle-right"} size={20} color="#bbb" />
      </View>
    </TouchableOpacity>
  );
};

export default PlannerItem;
