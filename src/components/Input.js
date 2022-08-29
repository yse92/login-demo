import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Input = ({
  onChange,
  value,
  error,
  labelText,
  secureTextEntry,
  iconURL,
  editable,
}) => {
  const handleChange = e => {
    onChange(e);
  };

  const [secured, setSecured] = useState(false);

  useEffect(() => {
    setSecured(secureTextEntry);
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{labelText}</Text>
      <View style={styles.container}>
        <TextInput
          onChangeText={handleChange}
          value={value}
          secureTextEntry={secured}
          editable={editable}
          style={styles.input}
        />
        {iconURL && secureTextEntry && (
          <TouchableOpacity
            onPressIn={() => setSecured(false)}
            onPressOut={() => setSecured(true)}>
            <Image source={iconURL} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    width: '90%',
    alignItems: 'flex-start',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    fontSize: 24,
    width: '90%',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  label: {
    marginBottom: 5,
  },
});

export default Input;
