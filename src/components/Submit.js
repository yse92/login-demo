import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Submit = ({iconURL, title, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Profile')}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#345FB4', '#95adde']}
        style={styles.gradient}>
        <Text style={styles.text}>{title}</Text>
        <Image source={iconURL} style={styles.icon} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    width: '100%',
  },
  icon: {
    position: 'absolute',
    left: 250,
    width: 25,
    height: 20,
  },
  gradient: {
    width: '80%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
});
export default Submit;
