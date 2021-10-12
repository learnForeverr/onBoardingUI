import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import OnBoarding from './src/view/OnBoarding';

const App = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={{flex: 1}}>
        <OnBoarding />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
