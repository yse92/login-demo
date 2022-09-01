import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 115,
    width: '95%',
    borderRadius: 25,
    borderColor: '#345FB4',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    height: 90,
    width: 90,
    left: 12,
    borderRadius: 17,
    backgroundColor: 'lightgrey',
  },
  titleHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    height: '75%',
    left: 20,
  },
  titleText: {
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    height: '50%',
  },
  description: {
    textAlign: 'left',
    width: '100%',
    color: 'grey',
  },
  cameraButton: {
    height: '30%',
    width: '10%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    top: -30,
    left: 30,
  },
  images: {
    width: 90,
    height: 90,
    borderRadius: 17,
  },
});
