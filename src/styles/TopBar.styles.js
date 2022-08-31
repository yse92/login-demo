import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  leftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
  },
  rightButton: {
    flexDirection: 'row',
    width: '25%',
    backgroundColor: 'white',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  rightButtonText: {
    color: '#6699ff',
    fontWeight: '600',
  },
  leftButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});
