import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../styles/Submit.styles';

const Submit = ({iconURL, title, onChange}) => {
  const handleChange = e => {
    onChange(e);
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleChange}>
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

export default Submit;
