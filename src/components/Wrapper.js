import React from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const Wrapper = ({children, url}) => {
  return (
    <>
      <LinearGradient
        start={{x: 2, y: 1}}
        end={{x: 0, y: -0.5}}
        colors={['#1e50b3', '#c1cff3']}
        style={styles.background}>
        <Image source={url} style={styles.image} />
        {children}
      </LinearGradient>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#00BCD4"
        translucent={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: 340,
    top: 50,
    zIndex: 2,
  }
});

export default Wrapper;
