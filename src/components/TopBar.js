import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/TopBar.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContext } from '@react-navigation/native';

const TopBar = ({leftButtonText, rightButtonText, onChange}) => {
  const navigation = React.useContext(NavigationContext);
  const handler = () => onChange()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftButton}
        onPress={() => navigation.goBack()}>
        <MaterialIcons name="chevron-left" size={30} color="#fff" />
        <Text style={styles.leftButtonText}>{leftButtonText}</Text>
      </TouchableOpacity>
      {rightButtonText && (
        <TouchableOpacity style={styles.rightButton} onPress={handler}>
          <MaterialIcons name="done" size={20} color="#6699ff" />
          <Text style={styles.rightButtonText}>{rightButtonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopBar;
