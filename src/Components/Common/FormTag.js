import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class FormTag extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      text: '',
      placeholder: 'Placeholder',
      switchOn: false
    });
  }

  componentWillMount() {
    const { value, placeholder } = this.props;
    if (value) {
      this.setState({ text: value });
    }
    if (placeholder) {
      this.setState({ placeholder });
    }
  }

  render() {
    const { disableDivider, label, color } = this.props;

    const styles = {
      container: {
        flexDirection: 'row',
        marginLeft: 25,
        borderBottomWidth: disableDivider ? 0 : 1,
        paddingBottom: 13,
        marginRight: 25,
        marginTop: 20,
        borderColor: '#f5f5f5'
      },
      infoContainer: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      deleteIcon: {
        color: '#ccc',
        flex: 1,
        marginRight: 15,
        marginLeft: 5,
        marginTop: 2,
        marginBottom: 5,
        opacity: 1,
        alignSelf: 'center'
      },
      label: {
        fontFamily: 'Open Sans',
        fontSize: 15,
        letterSpacing: 0.25,
        color: '#252525',
        marginBottom: 2,
        backgroundColor: 'transparent',
        maxWidth: 225
      },
      field: {
        fontFamily: 'Open Sans',
        fontSize: 16,
        color: '#252525',
        marginTop: 3,
        height: 20
      },
      circleIcon: {
        height: 11,
        width: 11,
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: 'transparent',
        borderColor: color,
        borderWidth: 1.5,
        marginRight: 20,
        marginTop: 1
      },
      leftSection: {
        flex: 1,
        flexDirection: 'row'
      },
    };

    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.leftSection}>
            <View style={styles.circleIcon} />
            <Text style={styles.label}>{label}</Text>
          </View>

          <TouchableOpacity style={styles.rightSection}>
            <Icon name="times-circle" size={15} style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export { FormTag };
