import React from 'react';
import {StyleSheet, View} from 'react-native';
const Tab = ({children, height}) => {
  return <View style={[styles.container, {height: height}]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'column',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 15,
  },
});

export default Tab;
