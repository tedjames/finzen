import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { connect } from 'react-redux';
import { hideRegister } from '../../Actions';


const styles = {
  header: {
    paddingTop: 25,
    paddingRight: 13,
    paddingLeft: 13
  },
  xIcon: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    color: 'white'
  },
  iconContainer: {
    alignSelf: 'flex-end'
  },
  container: {
    backgroundColor: 'white',
    height: 195,
    width: 300,
    marginRight: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 175,
    padding: 30,
    paddingBottom: 35,
    paddingTop: 35
  },
  logo: {
    alignSelf: 'flex-start'
  },
  fin: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 6,
    position: 'absolute',
    top: 0,
    left: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 4, height: 5 },
    textShadowRadius: 12
  },
  zen: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 6,
    zIndex: 2,
    position: 'absolute',
    top: 13,
    left: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 4, height: 5 },
    textShadowRadius: 12
  },
};

const RegisterForm = (props) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.fin}>FIN</Text>
          <Text style={styles.zen}>ZEN</Text>
        </View>

        <TouchableOpacity style={styles.iconContainer} onPress={props.hideRegister}>
          <Icon style={styles.xIcon} name="x" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {props.children}
      </View>
    </View>
  );
};

export default connect(null, { hideRegister })(RegisterForm);
