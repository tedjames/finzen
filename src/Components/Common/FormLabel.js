import React from 'react';
import { Text, View } from 'react-native';

const FormLabel = (props) => {
  const { text } = props;
  const label = text.toUpperCase();
  const styles = {
    label: {
      fontFamily: 'Montserrat',
      fontSize: 10,
      letterSpacing: 1.75,
      color: '#879099',
      alignSelf: 'center',
      backgroundColor: 'transparent',
      marginRight: 10,
      marginLeft: 10
    },
    divider: {
      borderBottomWidth: 1,
      borderColor: '#eee',
      paddingBottom: 10,
      flex: 1,
      marginRight: 10,
      marginLeft: 10,
      position: 'relative',
      bottom: 5
    }
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: props.marginTop ? props.marginTop : 35, marginBottom: props.marginBottom ? props.marginBottom : 5 }}>
      <View style={styles.divider} />
      <Text style={styles.label}>{label}</Text>
      <View style={styles.divider} />
    </View>

  );
};

export { FormLabel };
