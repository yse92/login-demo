import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  keyBoardAvoidingView: {
    flex: 1,
    height: '100%'
  },
  backgroundGradient: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    postion: 'relative'
  },
  image: {
    width: 340,
    top: 40,
    zIndex: 2,
  },
  contentContainer: {
    height: deviceHeight
  }
});
