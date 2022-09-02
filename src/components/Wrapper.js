import React from 'react';
import {Image, KeyboardAvoidingView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../styles/Wrapper.styles';

const Wrapper = ({children, url}) => {
  return (
    <>
      <KeyboardAvoidingView
        contentContainerStyle={styles.contentContainer}
        behavior={"position"}
        keyboardVerticalOffset={0}
        enabled={Platform.OS === "ios"}
        style={styles.keyBoardAvoidingView}>
        <LinearGradient
          start={{x: 2, y: 1}}
          end={{x: 0, y: -0.5}}
          colors={['#1e50b3', '#c1cff3']}
          style={styles.backgroundGradient}>
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



export default Wrapper;
