import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../styles/Header.style'
import {findUri} from '../utils/findUri';
const ImagePicker = require('react-native-image-picker');

interface Props {
  title: string,
  descriptionText: string,
  onPress(uri: string): void,
  uri: string
}

const Header = ({title, descriptionText, onPress, uri}: Props) => {

  const launchImageLibrary = () => {
    ImagePicker.launchImageLibrary(
      {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      response => {
        if (response.assets) {
          const uri = findUri(response)
          if (uri) {
            onPress(uri)
          }
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {uri && <Image source={{uri: uri}} style={styles.images} />}
      </View>
      <View style={styles.titleHeader}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.description}>{descriptionText}</Text>
      </View>
      <TouchableOpacity
        style={styles.cameraButton}
        onPress={launchImageLibrary}>
        <MaterialIcons name="camera-alt" size={30} color="grey" />
      </TouchableOpacity>
    </View>
  );
};


export default Header;
