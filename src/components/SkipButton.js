import React from 'react';
import {View, Text} from 'react-native';

const SkipButton = () => {
  return (
    <View
      style={{
        width: 80,
        height: 35,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'white'}}>Skip</Text>
    </View>
  );
};

export default SkipButton;
