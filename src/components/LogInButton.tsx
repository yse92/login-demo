import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../styles/LogInButton.styles';

interface Props {
  iconURL: any,
  title: string,
  onPress(uri: string): void
}

const LogInButton = ({iconURL, title, onPress}: Props) => {
  const handleChange = e => {
    onPress(e);
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
        <Image  source={iconURL} width={20} style={styles.icon}  />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LogInButton;
