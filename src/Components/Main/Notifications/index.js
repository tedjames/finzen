import React, { Component } from 'react';
import { Text } from 'react-native';
import { GradientView } from '../../Common'

import { styles } from '../commonStyles'

export default class Notifications extends Component {
  render() {
    return (
      <GradientView>
        <Text>Notifications</Text>
      </GradientView>
    );
  }
}
