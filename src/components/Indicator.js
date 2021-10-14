import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {data, _WIDTH} from '../helper/data';

const Indicator = ({scrollVal}) => {
  const length = data.length;
  const indicatorWidth = length * 15;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        scrollVal.value,
        Array(length * 2)
          .fill('_')
          .map((_, i) => _WIDTH * 0.5 * i),
        Array(length * 2)
          .fill('_')
          .map((_, i) => (i === 0 ? 10 : i % 2 === 0 ? 10 : 20)),
      ),
      height: 10,
      borderRadius: 5,
      backgroundColor: 'white',
      position: 'absolute',
      left: interpolate(
        scrollVal.value,
        data.map((_, i) => i * _WIDTH),
        data.map((_, i) => i * 10 + 5 * i),
      ),
    };
  });

  return (
    <View
      style={{
        width: indicatorWidth,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // overflow: 'hidden',
        position: 'absolute',
        left: '40%',
      }}>
      {data.map(item => (
        <View style={styles.indicator} key={item.id} />
      ))}
      <Animated.View style={animatedStyle} />
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
    marginRight: 5,
  },
});
