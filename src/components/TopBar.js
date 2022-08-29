import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const TopBar = ({prevButtonText, submitButtonText}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.prevButton}>
        <MaterialIcons name="Done" size={30} color="#900" />
        <Text>{prevButtonText}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton}>
        <Text>{submitButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'space-around',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  prevButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    backgroundColor: 'red',
    height: 30,
  },
  nextButton: {
    flexDirection: 'row',
    width: '20%',
    backgroundColor: 'w',
    height: 30,
    alignItems: 'center',
  },
});

export default TopBar
