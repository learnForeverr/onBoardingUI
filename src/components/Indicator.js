import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {_WIDTH} from '../helper/config';

const Indicator = () => {
  return (
    <View
      style={{
        width: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden',
        position: 'absolute',
        left: '40%',
      }}>
      <View style={styles.indicator} />
      <View style={styles.indicator} />
      <View style={styles.indicator} />
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
  },
});
