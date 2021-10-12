import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import Indicator from '../components/Indicator';
import SkipButton from '../components/SkipButton';
import {_WIDTH} from '../helper/config';
import {data} from '../helper/data';
import Logo from '../svgIcons/Logo';

const OnBoarding = () => {
  const commonStyle = {textAlign: 'center', color: 'white'};

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Logo />
        <SkipButton />
      </View>
      <ScrollView horizontal={true}>
        {data.map(item => (
          <View key={item.id} style={styles.container}>
            <Text style={{...commonStyle, fontSize: 26}}>{item.title}</Text>
            <item.icon />
            <Text style={commonStyle}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View />
        <Indicator />
        <SkipButton />
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
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
    height: '75%',
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
