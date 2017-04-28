import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity, AlertIOS, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import TitleCard from './TitleCard';
import MainCard from './MainCard';
import NewComment from './NewComment';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE = 40.542698;
const LONGITUDE = -74.362480;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const mapStyle = [{'stylers':[{'hue':'#ff1a00'},{'invert_lightness':true},{'saturation':-100},{'lightness':33},{'gamma':0.5}]},{'featureType':'water','elementType':'geometry','stylers':[{'color':'#2D333C'}]}];

export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  handleButton() {
    AlertIOS.prompt('Add a Tag', 'Please enter a name for your tag', this.createTag, undefined, '');
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={styles.scrollContainer}
        >
          <Animatable.View>
            <MapView
              provider={PROVIDER_GOOGLE}
              initialRegion={this.state.region}
              style={styles.map}
              customMapStyle={mapStyle}
              scrollEnabled
              zoomEnabled
              pitchEnabled
              rotateEnabled
            >
              <MapView.Marker
                title="Antonio's Brick Oven Pizza"
                description="29 Main St. Metuchen, NJ 08817"
                coordinate={this.state.region}
                pinColor="#d3d8d9"
              />
            </MapView>
            <TouchableOpacity
              style={styles.iconContainer}
              activeOpacity={0.4}
              onPress={() => Actions.pop()}
            >
              <Icon name="arrow-left-circle" size={28} style={styles.backIcon} />
            </TouchableOpacity>
          </Animatable.View>
          <TitleCard name="Antonio's Brick Oven Pizza" />
          <MainCard />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  scrollContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ebecee'
  },
  map: {
    width: SCREEN_WIDTH,
    height: 300,
    marginTop: -60
  },
  backIcon: {
    color: '#fff',
    opacity: 0.9,
    backgroundColor: 'transparent',
  },
  iconContainer: {
    position: 'relative',
    bottom: 220,
    margin: 5,
    width: 50,
    height: 20,
    alignItems: 'center'
  },
});
