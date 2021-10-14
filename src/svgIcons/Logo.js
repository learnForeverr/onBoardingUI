import * as React from 'react';
import Animated, {interpolate, useAnimatedProps} from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';
import {data, interpolation, _WIDTH} from '../helper/data';

const AnimSvg = Animated.createAnimatedComponent(Svg);

function Logo({scrollVal}) {
  const animatedProp = useAnimatedProps(() => {
    return {
      width: 45,
      height: 43,
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      rotation: interpolate(
        scrollVal.value,
        interpolation,
        data.map((_, i) => i * 90),
      ),
    };
  });

  return (
    <AnimSvg animatedProps={animatedProp}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.527 9.316L22.5 0l-3.027 9.316a14.52 14.52 0 00-9.526 6.922H.15l7.927 5.76C8.027 22.49 8 22.992 8 23.5c0 3.726 1.405 7.124 3.715 9.692l-3.028 9.32 7.925-5.758C18.41 37.556 20.404 38 22.5 38s4.09-.445 5.889-1.245l7.924 5.757-3.028-9.32A14.446 14.446 0 0037 23.5c0-.507-.026-1.009-.077-1.503l7.927-5.759h-9.797a14.52 14.52 0 00-9.526-6.922zm1.986 6.113l-1.986-6.113A14.56 14.56 0 0022.5 9c-1.038 0-2.05.11-3.027.316l-1.986 6.113a9.52 9.52 0 00-1.112.81H9.947a14.407 14.407 0 00-1.87 5.758l5.197 3.776c.11.45.253.889.426 1.312l-1.985 6.107a14.539 14.539 0 004.896 3.563l5.202-3.78a9.65 9.65 0 001.374 0l5.201 3.78a14.539 14.539 0 004.897-3.563L31.3 27.085c.173-.423.316-.861.426-1.312l5.197-3.776a14.407 14.407 0 00-1.87-5.759h-6.428a9.537 9.537 0 00-1.112-.81zm1.112.81h-.849l-.263-.81A9.456 9.456 0 0022.5 14c-1.84 0-3.558.523-5.013 1.429l-.263.81h-.85A9.48 9.48 0 0013 23.5c0 .783.095 1.545.274 2.273l.69.5-.264.812a9.506 9.506 0 008.113 5.89l.687-.499.687.5a9.506 9.506 0 008.113-5.891l-.263-.811.69-.501c.178-.728.273-1.49.273-2.273a9.48 9.48 0 00-3.375-7.262z"
        fill="#fff"
      />
    </AnimSvg>
  );
}

export default Logo;
