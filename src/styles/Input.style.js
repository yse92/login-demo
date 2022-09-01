import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 60,
    width: '100%',
    paddingRight: 5,
    paddingLeft: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    fontSize: 20,
    width: '90%',
    marginBottom: 10,
  },
  dateInput: {
    fontSize: 20,
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  label: {
    marginBottom: 5,
    color: 'grey',
  },
  errorText: {
    color: 'red',
  },
});
