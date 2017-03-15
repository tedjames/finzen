import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Text, ActionSheetIOS, Image, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import ImagePicker from 'react-native-image-crop-picker';
import Snackbar from 'react-native-snackbar';

const styles = {
  commentContainer: {
    marginTop: 10,
    flexDirection: "row",
    marginLeft: -10
  },
  attachIcon: {
    color: "#8b8b8b",
    marginLeft: 1.5,
    marginTop: 4,
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5
  },
  formField: {
    fontSize: 11.5,
    marginLeft: 2,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 3,
    marginTop: -2,
    paddingLeft: 8,
    paddingTop: 2,
    backgroundColor: "#f5f5f5",
    flex: 10
  },
  activeSend: {
    marginTop: 1,
    flex: 1,
    marginLeft: 17,
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "500",
    color: "#63cce8"
  },
  send: {
    marginTop: 1,
    flex: 1,
    marginLeft: 17,
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "500",
    color: "#cccccc"
  }
}

export default class NewComment extends Component {
  constructor(props) {
    super(props);
    this.renderSendButton = this.renderSendButton.bind(this);
    this.handleSend = this.handleSend.bind(this);

    this.state = ({
      text: "",
      height: 21,
      sendOpacity: 0.4
    });
  }
  renderSendButton(text) {
    switch (text) {
      case "":
        return (
          <TouchableOpacity onPress={this.handleSend} activeOpacity={0.4}>
            <Text style={styles.send}>Send</Text>
          </TouchableOpacity>
        );
      default:
        return (
          <TouchableOpacity onPress={this.handleSend} activeOpacity={0.4}>
            <Text style={styles.activeSend}>Send</Text>
          </TouchableOpacity>
        );
    }
  }
  handleSend() {
    console.log("handleSend fired");
    this.setState({ text: "" });
    Snackbar.show({
      title: 'Comment was succesfully submitted',
      duration: Snackbar.LENGTH_LONG,
    });
  }
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: [ "Take a Photo", "Choose from Gallery", "Cancel" ],
      cancelButtonIndex: 2,
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 0:
          ImagePicker.openCamera({
            width: 300,
            height: 450,
            cropping: true
          }).then(image => {
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
          }).then(image => {
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
          <Icon name="paper-clip" size={16} style={styles.attachIcon} />
        </TouchableOpacity>
        <TextInput
          style={[styles.formField, { height: this.state.height + 7 }]}
          selectionColor="#728ce7"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Add comment..."
          clearButtonMode="always"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="done"
          onContentSizeChange={(e) => this.setState({ height: e.nativeEvent.contentSize.height })}
        />
        {this.renderSendButton(this.state.text)}
      </View>
    );
  }
}
