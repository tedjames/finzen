import React from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { hideRegister } from '../../Actions';
import { GradientView } from '../Common';
import Logo from './Logo';

const { width } = Dimensions.get('window');

const styles = {
  xIcon: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    color: 'white'
  },
  iconContainer: {
    alignSelf: 'flex-end',
    padding: 20,
    top: 16
  },
  container: {
    backgroundColor: 'white',
    height: width / 1,
    width: width / 1.25,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 30,
    paddingBottom: 35,
    paddingTop: 35,
    bottom: 32,
    zIndex: -1,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.175,
    shadowRadius: 10
  },
  image: {
    width: width / 1.275,
    height: width / 1.95,
    alignSelf: 'center',
    marginTop: 30,
    marginRight: 35,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.75,
    shadowRadius: 3,
  },
  buttonText: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 4,
    alignSelf: 'center'
  },
  nextButton: {
    height: 70,
    width: 250,
    alignSelf: 'flex-end',
    right: 30,
    bottom: 80,
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.175,
    shadowRadius: 7
  },
  arrowIcon: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginLeft: 20,
    color: 'white'
  },
  error: {
    color: 'red',
    fontFamily: 'Montserrat',
    fontSize: 11,
    letterSpacing: 1.1,
    fontWeight: '400'
  }
};

const RegisterForm = (props) => {
  return (
    <View>
      <View>
        <Logo />

        <TouchableOpacity style={styles.iconContainer} onPress={props.toggleRegister}>
          <Icon style={styles.xIcon} name="x" size={24} />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../Images/registerImage.png')}
        style={styles.image}
      />

      <View style={styles.container}>
        {props.children}
        { props.error ? <Text style={styles.error}>{props.error.toUpperCase()}</Text> : null }
      </View>

      <TouchableOpacity onPress={props.onSubmit} style={styles.nextButton} activeOpacity={0.6}>
        <GradientView
          start={{ x: 0.0, y: 0.75 }}
          end={{ x: 0.5, y: 1.0 }}
          style={{ height: '100%', justifyContent: 'center', flexDirection: 'row' }}
          colors={['#AC70FB', '#9197F8', '#77BDF5']}
        >
          <Text style={styles.buttonText}>NEXT</Text>
          <Icon2 style={styles.arrowIcon} name="md-arrow-round-forward" size={14} />
        </GradientView>
      </TouchableOpacity>

    </View>
  );
};

export default connect(null, { hideRegister })(RegisterForm);
