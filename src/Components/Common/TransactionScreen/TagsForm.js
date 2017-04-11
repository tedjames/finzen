import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FaIcon from './FaIcon';
import Tag from './Tag';


const styles = {
  container: {
    flexDirection: 'row',
    marginLeft: 25,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginRight: 25,
    marginTop: 20,
    borderColor: '#ddd'
  },
  basketIcon: {
    color: '#a6a6a6',
    paddingLeft: 20,
    paddingRight: 5,
    alignSelf: 'center',
    flex: 1
  },
  infoContainer: {
    flex: 8
  },
  arrowIcon: {
    alignSelf: 'center',
    color: '#8b8b8b',
    flex: 0.5,
    marginTop: 12,
  },
  label: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    letterSpacing: 1.4,
    color: '#879099',
    marginBottom: 2,
  },
  value: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    color: '#404040',
    marginTop: 2
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 3,
    marginLeft: 1
  },
};

export default class TagsForm extends Component {
  renderArrow(hideArrow) {
    if (hideArrow) {
      return null;
    } return <FaIcon name="angle-right" size={19} style={styles.arrowIcon} />;
  }
  render() {
    return (
      <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={() => Actions.tags()}>
        {/* <FaIcon name="shopping-basket" size={18} style={styles.basketIcon} /> */}
        <View style={styles.infoContainer}>
          <Text style={styles.label}>{this.props.label}</Text>
          <View style={styles.tagsContainer}>
            <Tag name="Food" color="#4ab8ff" />
            <Tag name="Eating out" color="#584aff" style={{ marginLeft: 15 }} />
            <Tag name="Pizza" color="#ff4a60" style={{ marginLeft: 15 }} />
          </View>
        </View>
        {this.renderArrow(this.props.hideArrow)}
      </TouchableOpacity>
    );
  }
}
