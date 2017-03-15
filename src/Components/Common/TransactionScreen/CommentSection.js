import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import NewComment from './NewComment'
import Comment from './Comment'
import ImageComment from './ImageComment'

const styles = {
    sectionContainer: {
      marginLeft: 25,
      marginRight: 25,
      marginTop: 5
    },
    headerText: {
      fontFamily: "Montserrat",
      fontSize: 10,
      letterSpacing: 1.4,
      color: "#8b8b8b",
    },

};

export default class CommentSection extends Component {


  render() {
    return (
      <View style={styles.sectionContainer}>
        <Comment date="Today" time="9:37pm" text="Try their canolli next time" />
        <Comment date="Yesterday" time="1:24am" text="Try their canolli next time" />
        <Comment date="Jan 21, 2017" time="7:10pm" text="Try their canolli next time" />
        <ImageComment date="Jan 21, 2017" time="7:10pm" url="" name="React logo image" />
        <NewComment />
      </View>
    );
  }
}
