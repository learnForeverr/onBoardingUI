import React from 'react';
import {View, Text} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
} from 'react-native-reanimated';
import Svg, {Circle, G} from 'react-native-svg';
import {data, interpolation, _WIDTH} from '../helper/data';
import CheckMark from '../svgIcons/CheckMark';

const AnimCircle = Animated.createAnimatedComponent(Circle);

const CircleProgress = ({scrollVal}) => {
  const circumference = 2 * 3.149 * 30;

  const animatedProp = useAnimatedProps(() => {
    return {
      cx: 50,
      cy: 50,
      r: 30,
      fill: 'black',
      stroke: 'white',
      strokeLinecap: 'round',
      strokeWidth: 6,
      strokeDasharray: circumference,
      strokeDashoffset: interpolate(
        scrollVal.value,
        interpolation,
        data.map(
          (_, i) => circumference * ((data.length - 1 - i) / (data.length - 1)),
        ),
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Svg rotation={-90} width={100} height={100} viewBox={`0 0 100 100`}>
        <G>
          <Circle
            cx="50"
            cy="50"
            r="30"
            fill="transparent"
            stroke="transparent"
            strokeOpacity={0.2}
            strokeWidth={6}
          />
          <AnimCircle animatedProps={animatedProp} />
        </G>
      </Svg>
      <View style={{position: 'absolute', top: 25}}>
        <CheckMark scrollVal={scrollVal} />
      </View>
    </View>
  );
};

export default CircleProgress;
