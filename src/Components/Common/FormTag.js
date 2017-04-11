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
    const { disableDivider, label } = this.props;

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
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      deleteIcon: {
        color: '#afafaf',
        flex: 0.5,
        marginRight: 15,
        marginLeft: 5,
        marginTop: 2,
        marginBottom: 5,
        opacity: 1
      },
      label: {
        fontFamily: 'Open Sans',
        fontSize: 15,
        letterSpacing: 0.25,
        color: '#252525',
        marginBottom: 2,
        backgroundColor: 'transparent',
      },
      field: {
        fontFamily: 'Open Sans',
        fontSize: 16,
        color: '#252525',
        marginTop: 3,
        height: 20
      },
    };

    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>{label}</Text>
          <TouchableOpacity>
            <Icon name="times-circle" size={15} style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export { FormTag };
