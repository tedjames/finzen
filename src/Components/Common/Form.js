import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';

class Form extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loading) {
      this.refs.form.transitionTo({ opacity: 0 }, 250);
      this.refs.mainCard.transitionTo({ opacity: 0, height: 1, padding: 0, margin: 0 }, 750);
    }
  }

  render() {
    const { height, disablePadding } = this.props;
    const mainCard = {
      backgroundColor: '#fff',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 0,
      marginBottom: 15,
      borderRadius: 12,
      borderWidth: 0.5,
      borderColor: '#eee',
      height: height ? height : 450,
      width: 352.5,
      alignSelf: 'center',
      zIndex: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.28,
      shadowRadius: 18,
      elevation: 2,
      paddingTop: disablePadding ? 0 : 50
    };
    return (
      <Animatable.View ref="mainCard" animation="fadeInUp" duration={900} style={mainCard}>
        <Animatable.View ref="form" style={{ opacity: 1 }}>
          {this.props.children}
        </Animatable.View>
      </Animatable.View>
    );
  }
}


export { Form };
