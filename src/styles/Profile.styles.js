import {Dimensions, StyleSheet} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  wrap: {
    height: '80%',
    width: '100%',
    alignItems: 'flex-start',
    top: 20,
  },
  container1: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
    height: deviceHeight * 0.25,
    flexWrap: 'wrap',
  },
  container2: {
    alignItems: 'center',
    height: '50%',
    width: '100%',
    justifyContent: 'space-around',
  },
});
