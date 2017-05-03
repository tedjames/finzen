import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Text, ActionSheetIOS } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ImagePicker from 'react-native-image-crop-picker';
import Snackbar from 'react-native-snackbar';

const styles = {
  commentContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 55,
    alignItems: 'center',
    borderRadius: 0,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: -15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.125,
    shadowRadius: 10,
  },
  attachIcon: {
    color: '#bbb',
    alignSelf: 'center',
    marginLeft: 20,
    paddingRight: 5,
    paddingBottom: 10,
    paddingTop: 10,
    top: 1
  },
  formField: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    flex: 8,
    color: '#000',
    marginLeft: 10,
    alignSelf: 'center',
  },
  activeSend: {
    fontFamily: 'Montserrat',
    fontSize: 11,
    letterSpacing: 3,
    fontWeight: '300',
    color: '#AC70FB',
    paddingLeft: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: 'transparent'
  },
  send: {
    fontFamily: 'Montserrat',
    fontSize: 11,
    letterSpacing: 3,
    fontWeight: '300',
    color: '#dadada',
    paddingLeft: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: 'transparent',
  }
};

export default class NewComment extends Component {
  constructor(props) {
    super(props);
    this.handleSend = this.handleSend.bind(this);

    this.state = ({
      text: '',
      height: 21,
      sendOpacity: 0.4
    });
  }

  handleSend() {
    console.log('handleSend fired');
    this.setState({ text: '' });
    Snackbar.show({
      title: 'Comment was succesfully submitted',
      duration: Snackbar.LENGTH_LONG,
    });
  }

  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Take a Photo', 'Choose from Gallery', 'Cancel'],
      cancelButtonIndex: 2,
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 0:
          ImagePicker.openCamera({
            width: 300,
            height: 450,
            cropping: true
          }).then((image) => {
            console.log(image);
            Snackbar.show({
              title: 'Image was succesfully added',
              duration: Snackbar.LENGTH_LONG,
            });
          });
          break;
        case 1:
          ImagePicker.openPicker({
            width: 300,
            height: 450,
            cropping: true
          }).then((image) => {
            console.log(image);
            Snackbar.show({
              title: 'Image was succesfully added',
              duration: Snackbar.LENGTH_LONG,
            });
          });
          break;
        case 2:
          break;
        default:
          break;
      }
    });
  }

  render() {
    return (
      <View style={styles.commentContainer}>
        <TouchableOpacity activeOpacity={0.4} onPress={this.showActionSheet}>
          <Icon name="paper-clip" size={15} style={styles.attachIcon} />
        </TouchableOpacity>
        <TextInput
          style={[styles.formField, { height: this.state.height + 7 }]}
          selectionColor="#AC70FB"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder="Add comment..."
          placeholderTextColor="#888"
          clearButtonMode="never"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="done"
          onContentSizeChange={e => this.setState({ height: e.nativeEvent.contentSize.height })}
        />
        <TouchableOpacity
          onPress={this.handleSend}
          activeOpacity={0.4}
          disabled={this.state.text ? false : true}
        >
          <Text style={this.state.text ? styles.activeSend : styles.send}>SEND</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
