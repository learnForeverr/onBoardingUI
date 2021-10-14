import React, {useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import CircleProgress from '../components/CircleProgress';
import Indicator from '../components/Indicator';
import SkipButton from '../components/SkipButton';
import {data, interpolation, _WIDTH} from '../helper/data';
import Logo from '../svgIcons/Logo';

const OnBoarding = () => {
  const commonStyle = {textAlign: 'center', color: 'white'};

  const scrollVal = useSharedValue(0);

  const scrollRef = useRef();

  const handleScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {x}}) => {
      scrollVal.value = x;
    },
  });

  const mainContainerStyle = useAnimatedStyle(() => {
    return {
      width: '100%',
      height: '100%',
      backgroundColor: interpolateColor(
        scrollVal.value,
        interpolation,
        data.map(item => item.color),
      ),
      alignItems: 'center',
    };
  });

  const handleSkip = () => {
    scrollRef.current.scrollToEnd({animated: true});
  };

  return (
    <Animated.View style={mainContainerStyle}>
      <View style={styles.header}>
        <Logo scrollVal={scrollVal} />
        <TouchableOpacity onPress={handleSkip}>
          <SkipButton />
        </TouchableOpacity>
      </View>
      <Animated.ScrollView
        ref={scrollRef}
        onScroll={handleScroll}
        horizontal={true}
        snapToAlignment="center"
        snapToInterval={_WIDTH}
        decelerationRate={1}
        scrollEventThrottle={16}>
        {data.map(item => (
          <View key={item.id} style={styles.container}>
            <Text style={{...commonStyle, fontSize: 26}}>{item.title}</Text>
            <item.icon />
            <Text style={commonStyle}>{item.description}</Text>
          </View>
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        <View />
        <Indicator scrollVal={scrollVal} />
        <CircleProgress scrollVal={scrollVal} />
      </View>
    </Animated.View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  header: {
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: '15%',
  },
  container: {
    width: _WIDTH,
    overflow: 'hidden',
    justifyContent: 'space-between',
    height: '90%',
  },
  footer: {
    // backgroundColor: 'white',
    height: '10%',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
