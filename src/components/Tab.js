import React from 'react';
import {View} from 'react-native';
import {styles} from '../styles/Tab.styles';

const Tab = ({children, height}) => {
  return(
    <View style={[styles.container, {height: height}]}>{children}</View>
  )
};


export default Tab;
