import React, { FunctionComponent } from 'react';
import {View} from 'react-native';
import {styles} from '../styles/Tab.styles';

interface Props {
  height: string,
  children: React.ReactNode
}

const Tab: FunctionComponent<Props> = (props) => {
  return(
    <View style={[styles.container, {height: props.height}]}>{props.children}</View>
  )
};

export default Tab;
