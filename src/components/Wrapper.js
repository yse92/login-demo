import React from 'react';
import {Image, KeyboardAvoidingView, StatusBar, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Wrapper = ({children, url}) => {
  return (
    <>
      <KeyboardAvoidingView contentContainerStyle={{height: '100%'}} behavior="position" style={styles.background}>
        <LinearGradient
          start={{x: 2, y: 1}}
          end={{x: 0, y: -0.5}}
          colors={['#1e50b3', '#c1cff3']}
          style={{flex: 1, height: '100%', justifyContent: 'flex-end', alignItems: 'center', postion: 'relative'}}>
          <Image source={url} style={styles.image} />
          {children}
        </LinearGradient>
      </KeyboardAvoidingView>
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
    height: '100%'
  },
  image: {
    width: 340,
    top: 40,
    zIndex: 2,
  }
});

export default Wrapper;
