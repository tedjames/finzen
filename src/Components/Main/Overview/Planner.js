import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback as Touchable, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import PlannerItem from './PlannerItem'
import { SettingsCard, Header } from '../../Common'

const screen = {height, width} = Dimensions.get('window');

const styles = {
  plannerContainer: {
    flex: 1,
    borderWidth: 0,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginRight: 100
  },
  section: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 80,
    width: screen.width / 2,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingLeft: 18
  },
  sectionTitle: {
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: "#3e3e3e",
    opacity: 0.9,
    fontSize: 15,
    letterSpacing: 0.65,
    backgroundColor: "transparent",
    marginLeft: 22,
    marginTop: 4
  },
  icon: {
    color: "#ccc",
    marginTop: 3,
  },
  titleSection: {
    flexDirection: "row",
  },
  section1: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5
  },
  section2: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0.5,
  },
  section3: {
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 0.5
  },
  section4: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
  }
};


export default class Planner extends Component {

  render() {
    return (
      <View>
        <Header title="FINANCIAL PLANNER" type="centerSection" />
        <View style={styles.plannerContainer}>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.section, styles.section1]} activeOpacity={0.6}>
              <Icon name="check-square-o" size={22} style={[styles.icon]} />
              <View style={styles.titleSection}>
                <Text style={styles.sectionTitle}>Bills</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.section, styles.section2]} activeOpacity={0.6}>
              <Icon name="clipboard" size={21} style={[styles.icon, { marginRight: 1 }]} />
              <View style={styles.titleSection}>
                <Text style={styles.sectionTitle}>Budgets</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.section, styles.section3]} activeOpacity={0.6}>
              <Icon name="briefcase" size={20} style={[styles.icon, { marginRight: 1, marginTop: 5 }]} />
              <View style={styles.titleSection}>
                <Text style={styles.sectionTitle}>Income</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.section, styles.section4]} activeOpacity={0.6}>
              <Icon name="line-chart" size={19} style={[styles.icon, { marginRight: -1 }]} />
              <View style={styles.titleSection}>
                <Text style={styles.sectionTitle}>Net Worth</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
