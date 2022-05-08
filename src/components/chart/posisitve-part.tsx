import React from 'react';
import {Circle} from 'react-native-svg';
import {StyleSheet, Animated} from 'react-native';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
export const PosisitvePart = ({color, percentage}) => {
  const circleRef = React.useRef();

  const duration = 500;
  const delay = 500;
  const radius = 40;
  const max = 100;
  const activeCircle = 2 * Math.PI * radius;
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const animation = toValue => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };
  React.useEffect(() => {
    animation(percentage);
    animatedValue.addListener(v => {
      if (circleRef?.current) {
        // const maxPerc = (100 * v.value) / max;
        const strokeDashoffset =
          activeCircle - (activeCircle * percentage) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  });
  return (
    <Circle
      ref={circleRef}
      cx="50%"
      cy="50%"
      stroke={color}
      strokeWidth={12}
      r={40}
      fill="transparent"
      strokeDasharray={activeCircle}
      strokeDashoffset={activeCircle}
      strokeLinecap="round"
    />
  );
};

const styles = StyleSheet.create({});
