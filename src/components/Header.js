import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../styles/Header.style'

const ImagePicker = require('react-native-image-picker');

const Header = ({title, descriptionText}) => {
  const [fileUri, setFileUri] = useState();

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
          setFileUri(response.assets[0].uri);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {fileUri && <Image source={{uri: fileUri}} style={styles.images} />}
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
