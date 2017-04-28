import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ActionSheetIOS, AlertIOS, Alert } from 'react-native';
import Snackbar from 'react-native-snackbar';

const styles = {
  commentContainer: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  commentText: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    marginTop: 1,
    letterSpacing: 0.75,
    color: '#252525'
  },
  time: {
    fontFamily: 'Open Sans',
    fontSize: 11,
    fontWeight: '400',
    letterSpacing: 0.75,
    color: '#879099',
  },
  date: {
    fontFamily: 'Open Sans',
    fontSize: 11,
    fontWeight: '400',
    letterSpacing: 0.75,
    color: '#879099',
  },
  slash: {
    color: '#879099',
    marginLeft: 3,
    marginRight: 3,
    fontSize: 10,
    marginTop: 1,
    opacity: 0.75
  }
};


export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.showActionSheet = this.showActionSheet.bind(this);
  }
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: [ 'Edit', 'Delete', 'Cancel' ],
      cancelButtonIndex: 2,
      destructiveButtonIndex: 1
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 0:
          AlertIOS.prompt('Edit Comment', null, this.handleEdit, undefined, this.props.text)
          break;
        case 1:
          Alert.alert(
            'Confirm Deletion',
            'Are you sure you want to delete this comment?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: this.handleDelete}
            ]);
          break;
        default:
          break;
      }
    });
  }
  handleDelete() {
    Snackbar.show({
      title: 'Comment was successfully deleted',
      duration: Snackbar.LENGTH_LONG,
      action: {
        title: 'UNDO',
        color: '#81d187',
        onPress: () => { /* Do something. */ },
      },
    });
  }
  handleEdit(promptValue) {
    Snackbar.show({
      title: 'Comment was succesfully edited',
      duration: Snackbar.LENGTH_LONG,
    });
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={this.showActionSheet}
        style={styles.commentContainer}
      >
        <View style={styles.row}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.date}>{this.props.date}</Text>
            <Text style={styles.slash}>/</Text>
            <Text style={styles.time}>{this.props.time}</Text>
          </View>
        </View>
        <Text style={styles.commentText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
