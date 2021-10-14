import * as React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
} from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';
import {data, interpolation, _WIDTH} from '../helper/data';

const AnimatedPath = Animated.createAnimatedComponent(Path);

function CheckMark({scrollVal, ...props}) {
  const animatedProps = useAnimatedProps(() => {
    return {
      d: 'M2 10.196l5.187 9.197a2 2 0 003.034.544L32 1.5',
      stroke: '#0DB031',
      strokeWidth: 3,
      strokeLinecap: 'round',
      strokeDasharray: 60,
      strokeDashoffset: interpolate(
        scrollVal.value,
        interpolation,
        data.map((_, i) => (i === data.length - 1 ? 0 : 60)),
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <Svg
      width={34}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <AnimatedPath animatedProps={animatedProps} />
    </Svg>
  );
}

export default CheckMark;
